import { signInWithEmail } from "./actions";

export const metadata = { title: "Sign in · Premise" };

export default function SignInPage({
  searchParams,
}: {
  searchParams: { next?: string; sent?: string };
}) {
  const next = searchParams.next ?? "/";
  return (
    <main className="page" style={{ paddingTop: "var(--s-10)", maxWidth: 420 }}>
      <div className="eyebrow">Sign in</div>
      <h1
        style={{
          fontFamily: "var(--font-display)",
          fontSize: 32,
          letterSpacing: "-0.01em",
          margin: "8px 0 16px",
        }}
      >
        Premise
      </h1>
      <p style={{ color: "var(--ink-700)", marginBottom: 24 }}>
        We&rsquo;ll email you a magic link. No password required.
      </p>

      {searchParams.sent ? (
        <div
          className="card card-pad"
          style={{ background: "var(--brand-50)", borderColor: "var(--brand-200)" }}
        >
          Check your inbox &mdash; we just sent a sign-in link.
        </div>
      ) : (
        <form action={signInWithEmail}>
          <input type="hidden" name="next" value={next} />
          <label
            className="eyebrow"
            htmlFor="email"
            style={{ display: "block", marginBottom: 6 }}
          >
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="you@firm.com"
            style={{
              width: "100%",
              padding: "10px 12px",
              border: "1px solid var(--surface-line)",
              borderRadius: 4,
              fontSize: 15,
              marginBottom: 16,
              background: "var(--bg)",
              color: "var(--ink-900)",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px 16px",
              background: "var(--brand-700)",
              color: "white",
              border: 0,
              borderRadius: 4,
              fontSize: 15,
              fontWeight: 500,
              cursor: "pointer",
            }}
          >
            Send magic link
          </button>
        </form>
      )}
    </main>
  );
}
