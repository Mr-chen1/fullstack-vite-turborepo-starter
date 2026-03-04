'use client';

import {type JSX, type SyntheticEvent, useEffect, useMemo, useState, useId} from 'react';
import {useLocation, useNavigate, useParams} from 'react-router-dom';
import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {cn} from '@/lib/utils';

type NavItem = {
  id: string;
  label: string;
};

type NavLabelProps = {
  readonly label: string;
  readonly isActive: boolean;
};

const NAV_ITEMS: readonly NavItem[] = [
  {id: 'home', label: '\u9996\u9875'},
  {id: 'ai-assistant', label: 'AI\u667A\u80FD\u521B\u4F5C\u52A9\u624B'},
  {id: 'digital-assets', label: '\u6570\u5B57\u8D44\u4EA7'},
  {id: 'gallery', label: '\u4F5C\u54C1\u5E93'},
  {id: 'insights', label: '\u5E73\u53F0\u54A8\u8BE2'},
];

const COPY = {
  login: '\u767B\u5F55',
  loginTitle: '\u624B\u673A\u53F7\u9A8C\u8BC1\u7801\u767B\u5F55',
  loginDescription:
    '\u8F93\u5165\u624B\u673A\u53F7\u548C\u9A8C\u8BC1\u7801\uFF0C\u767B\u5F55\u540E\u5C06\u5728\u53F3\u4E0A\u89D2\u5C55\u793A\u5F53\u524D\u8D26\u53F7\u4FE1\u606F\u3002',
  closeDialog: '\u5173\u95ED\u767B\u5F55\u5F39\u7A97',
  phone: '\u624B\u673A\u53F7',
  phonePlaceholder: '\u8BF7\u8F93\u5165 11 \u4F4D\u624B\u673A\u53F7',
  code: '\u9A8C\u8BC1\u7801',
  codePlaceholder: '\u8F93\u5165\u9A8C\u8BC1\u7801',
  sendCode: '\u83B7\u53D6\u9A8C\u8BC1\u7801',
  cancel: '\u53D6\u6D88',
  submit: '\u767B\u5F55',
  invalidPhone: '\u8BF7\u8F93\u5165\u6B63\u786E\u7684 11 \u4F4D\u624B\u673A\u53F7',
  invalidCode: '\u8BF7\u8F93\u5165 4 \u5230 6 \u4F4D\u9A8C\u8BC1\u7801',
} as const;

const LOGIN_STORAGE_KEY = 'vite-frontend.header-user';

function maskPhone(phone: string): string {
  return phone.replace(/^(\d{3})\d{4}(\d{4})$/, '$1****$2');
}

function NavLabel({label, isActive}: NavLabelProps): JSX.Element {
  const id = useId();
  return (
    <span className={cn('header-nav-text', isActive && 'header-nav-text-active')}>
      {[...label].map((character, index) => (
        <span key={`${id}`} className="header-nav-char" style={{animationDelay: `${index * 90}ms`}}>
          {character === ' ' ? '\u00A0' : character}
        </span>
      ))}
    </span>
  );
}

export function Header(): JSX.Element {
  const location = useLocation();
  const navigate = useNavigate();
  const {locale} = useParams<{locale: string}>();
  const [activeSection, setActiveSection] = useState<string>('home');
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [countdown, setCountdown] = useState(0);
  const [loginError, setLoginError] = useState('');
  const [loginLabel, setLoginLabel] = useState<string>(COPY.login);

  const localePrefix = `/${locale ?? 'en'}`;
  const isLandingPage = location.pathname === localePrefix;
  const isPhoneValid = useMemo(() => /^1\d{10}$/.test(phone), [phone]);
  const isCodeValid = useMemo(() => /^\d{4,6}$/.test(code), [code]);

  useEffect(() => {
    const storedUser = globalThis.localStorage.getItem(LOGIN_STORAGE_KEY);
    if (storedUser) {
      setLoginLabel(storedUser);
    }
  }, []);

  useEffect(() => {
    if (!isLoginOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = globalThis.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsLoginOpen(false);
      }
    };

    globalThis.addEventListener('keydown', onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
      globalThis.removeEventListener('keydown', onKeyDown);
    };
  }, [isLoginOpen]);

  useEffect(() => {
    if (!countdown) {
      return undefined;
    }

    const timer = globalThis.setInterval(() => {
      setCountdown((current) => (current > 1 ? current - 1 : 0));
    }, 1000);

    return () => {
      globalThis.clearInterval(timer);
    };
  }, [countdown]);

  useEffect(() => {
    if (!isLandingPage) {
      setActiveSection('home');
      return undefined;
    }

    const updateActiveSection = () => {
      const sections = [...document.querySelectorAll<HTMLElement>('[data-nav-section="true"]')];
      if (sections.length === 0) {
        setActiveSection('home');
        return;
      }

      const viewportCenter = globalThis.innerHeight * 0.38;
      let nextActiveSection = sections[0]?.id ?? 'home';
      let smallestDistance = Number.POSITIVE_INFINITY;

      for (const section of sections) {
        const distance = Math.abs(section.getBoundingClientRect().top - viewportCenter);
        if (distance < smallestDistance) {
          smallestDistance = distance;
          nextActiveSection = section.id;
        }
      }

      setActiveSection(nextActiveSection);
    };

    updateActiveSection();
    globalThis.addEventListener('scroll', updateActiveSection, {passive: true});
    globalThis.addEventListener('resize', updateActiveSection);

    return () => {
      globalThis.removeEventListener('scroll', updateActiveSection);
      globalThis.removeEventListener('resize', updateActiveSection);
    };
  }, [isLandingPage]);

  const scrollToSection = (sectionId: string) => {
    const section = document.querySelector<HTMLElement>(`#${sectionId}`);
    if (!section) {
      return false;
    }

    section.scrollIntoView({behavior: 'smooth', block: 'start'});
    globalThis.history.replaceState(null, '', `${localePrefix}#${sectionId}`);
    setActiveSection(sectionId);
    return true;
  };

  const handleNavigate = async (sectionId: string) => {
    if (isLandingPage && scrollToSection(sectionId)) {
      return;
    }

    await navigate(localePrefix);
    globalThis.requestAnimationFrame(() => {
      globalThis.requestAnimationFrame(() => {
        scrollToSection(sectionId);
      });
    });
  };

  const handleSendCode = () => {
    if (!isPhoneValid || countdown > 0) {
      return;
    }

    setLoginError('');
    setCountdown(60);
  };

  const handleLogin = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isPhoneValid) {
      setLoginError(COPY.invalidPhone);
      return;
    }

    if (!isCodeValid) {
      setLoginError(COPY.invalidCode);
      return;
    }

    const nextLabel = maskPhone(phone);
    globalThis.localStorage.setItem(LOGIN_STORAGE_KEY, nextLabel);
    setLoginLabel(nextLabel);
    setIsLoginOpen(false);
    setLoginError('');
  };

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 pt-4 md:px-6">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full border border-white/12 bg-slate-950/66 px-4 py-3 shadow-[0_18px_65px_rgba(2,6,23,0.42)] backdrop-blur-xl md:px-6">
          <button
            className="shrink-0 text-left"
            type="button"
            onClick={() => {
              void handleNavigate('home');
            }}
          >
            <span className="block font-serif text-lg font-semibold tracking-[0.28em] text-white md:text-xl">
              NEBULA
            </span>
            <span className="block text-[10px] uppercase tracking-[0.42em] text-cyan-200/70">Creative OS</span>
          </button>

          <nav className="hidden flex-1 justify-center md:flex">
            <ul className="flex items-center gap-3 rounded-[28px] border border-white/8 bg-white/[0.03] px-4 py-2">
              {NAV_ITEMS.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <li key={item.id}>
                    <button
                      className={cn(
                        'header-nav-item px-3 py-2 text-sm font-medium tracking-[0.14em] text-white/72 transition-colors duration-300',
                        isActive && 'header-nav-item-active text-white',
                      )}
                      type="button"
                      onClick={() => {
                        void handleNavigate(item.id);
                      }}
                    >
                      <NavLabel isActive={isActive} label={item.label} />
                    </button>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Button
            className="rounded-full border border-cyan-300/35 bg-cyan-300/10 px-5 text-sm font-medium text-cyan-50 shadow-[0_0_24px_rgba(34,211,238,0.16)] hover:bg-cyan-300/[0.18]"
            type="button"
            onClick={() => {
              setIsLoginOpen(true);
            }}
          >
            {loginLabel}
          </Button>
        </div>

        <nav className="mt-3 overflow-x-auto px-1 md:hidden">
          <ul className="flex min-w-max items-center gap-3 rounded-[24px] border border-white/10 bg-slate-950/55 px-3 py-2 backdrop-blur-xl">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    className={cn(
                      'header-nav-item px-2 py-2 text-xs font-medium tracking-[0.12em] text-white/74',
                      isActive && 'header-nav-item-active text-white',
                    )}
                    type="button"
                    onClick={() => {
                      void handleNavigate(item.id);
                    }}
                  >
                    <NavLabel isActive={isActive} label={item.label} />
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>

      {isLoginOpen ? (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
          <button
            aria-label={COPY.closeDialog}
            className="absolute inset-0"
            type="button"
            onClick={() => {
              setIsLoginOpen(false);
            }}
          />
          <div className="relative z-10 w-full max-w-md overflow-hidden rounded-[28px] border border-cyan-200/18 bg-slate-950/92 p-6 shadow-[0_24px_90px_rgba(2,6,23,0.6)]">
            <div className="pointer-events-none absolute inset-x-10 top-0 h-28 rounded-full bg-cyan-400/18 blur-3xl" />
            <div className="relative">
              <div className="mb-6">
                <p className="text-xs uppercase tracking-[0.38em] text-cyan-200/65">Secure Sign In</p>
                <h2 className="mt-3 mb-2 text-2xl font-semibold tracking-[0.08em] text-white">{COPY.loginTitle}</h2>
                <p className="m-0 text-sm leading-6 text-slate-300">{COPY.loginDescription}</p>
              </div>

              <form className="space-y-4" onSubmit={handleLogin}>
                <div className="space-y-4">
                  <label className="mb-1 block text-sm text-slate-200" htmlFor="login-phone">
                    {COPY.phone}
                  </label>
                  <Input
                    className="h-12 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-slate-400 focus-visible:border-cyan-300/55 focus-visible:ring-1 focus-visible:ring-cyan-300/30 focus-visible:ring-offset-0"
                    id="login-phone"
                    inputMode="numeric"
                    maxLength={11}
                    placeholder={COPY.phonePlaceholder}
                    value={phone}
                    onChange={(event) => {
                      setPhone(event.target.value.replaceAll(/\D/g, '').slice(0, 11));
                    }}
                  />
                </div>

                <div className="space-y-4">
                  <label className="mb-1 block text-sm text-slate-200" htmlFor="login-code">
                    {COPY.code}
                  </label>
                  <div className="flex gap-3">
                    <Input
                      className="h-12 rounded-2xl border-white/10 bg-white/[0.06] text-white placeholder:text-slate-400 focus-visible:border-cyan-300/55 focus-visible:ring-1 focus-visible:ring-cyan-300/30 focus-visible:ring-offset-0"
                      id="login-code"
                      inputMode="numeric"
                      maxLength={6}
                      placeholder={COPY.codePlaceholder}
                      value={code}
                      onChange={(event) => {
                        setCode(event.target.value.replaceAll(/\D/g, '').slice(0, 6));
                      }}
                    />
                    <Button
                      className="h-12 rounded-2xl border-cyan-200/20 bg-cyan-200/[0.08] px-4 text-cyan-100 hover:bg-cyan-200/[0.14]"
                      disabled={!isPhoneValid || countdown > 0}
                      type="button"
                      variant="outline"
                      onClick={handleSendCode}
                    >
                      {countdown > 0 ? `${countdown}s` : COPY.sendCode}
                    </Button>
                  </div>
                </div>

                {loginError ? <p className="m-0 text-sm text-rose-300">{loginError}</p> : null}

                <div className="flex gap-3 pt-2">
                  <Button
                    className="h-12 flex-1 rounded-2xl text-slate-200 hover:bg-white/[0.08] hover:text-white"
                    type="button"
                    variant="ghost"
                    onClick={() => {
                      setIsLoginOpen(false);
                    }}
                  >
                    {COPY.cancel}
                  </Button>
                  <Button
                    className="h-12 flex-1 rounded-2xl bg-cyan-300 text-slate-950 hover:bg-cyan-200"
                    disabled={!isPhoneValid || !isCodeValid}
                    type="submit"
                  >
                    {COPY.submit}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
