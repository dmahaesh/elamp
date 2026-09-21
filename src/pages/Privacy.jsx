import LegalPage from '../components/LegalPage.jsx'

export default function Privacy() {
  return (
    <LegalPage title="Privacy Policy" updated="September 2026">
      <p>
        This Privacy Policy explains how ELamp.ai (“ELamp”, “we”, “us”) collects,
        uses and protects your information when you use our website and services.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li><strong>Account &amp; contact details</strong> — such as your name and email address, including when you sign in with Google to join our waitlist.</li>
        <li><strong>Messages you send us</strong> — the content of contact or enquiry forms you submit.</li>
        <li><strong>Basic usage data</strong> — standard technical information your browser provides (such as device and page views).</li>
      </ul>

      <h2>How we use your information</h2>
      <ul>
        <li>To add you to our waitlist and provide early access.</li>
        <li>To respond to your enquiries and communicate about our services.</li>
        <li>To operate, maintain and improve our website and offerings.</li>
      </ul>

      <h2>Google Sign-In</h2>
      <p>
        If you choose to sign in with Google, we receive your basic profile
        information (name, email address and profile picture) via Google’s OAuth
        service. We only request the <strong>openid</strong>, <strong>email</strong>
        {' '}and <strong>profile</strong> scopes. Your use of Google Sign-In is also
        subject to Google’s own privacy policy.
      </p>

      <h2>How we store data</h2>
      <p>
        Information you submit is stored securely in our database and hosting
        infrastructure. We retain it only as long as needed for the purposes above
        or as required by law.
      </p>

      <h2>Sharing</h2>
      <p>
        We do not sell your personal information. We may share data with service
        providers who help us operate the site (for example, our hosting and
        database provider), under appropriate confidentiality obligations.
      </p>

      <h2>Your choices</h2>
      <p>
        You may request access to, correction of, or deletion of your personal
        information at any time by emailing{' '}
        <a href="mailto:entertainmentlampofficial@gmail.com">entertainmentlampofficial@gmail.com</a>.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this policy? Reach us at{' '}
        <a href="mailto:entertainmentlampofficial@gmail.com">entertainmentlampofficial@gmail.com</a>.
      </p>
    </LegalPage>
  )
}
