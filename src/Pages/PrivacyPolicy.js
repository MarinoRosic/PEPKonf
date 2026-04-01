import transition from '../Transition';

const PEP = () => <span className='span'>PEP Konf</span>;

const Section = ({ title, children }) => (
  <div className='py-10'>
    <h2 className='text-white text-4xl'>{title}</h2>
    <div className='pt-5'>{children}</div>
  </div>
);

const PrivacyPolicy = () => {
  return (
    <section className='h-full w-full flex flex-col p-8 lg:p-20'>
      <div className='text-center'>
        <h1 className='text-white text-5xl'>
          Privacy Policy for <PEP />
        </h1>
      </div>

      <div className='py-10'>
        <p className='text-white text-balance'>
          At <PEP />, accessible from{' '}
          <a href="https://pepkonf.com" className='underline'>https://www.pepkonf.com/</a>,
          one of our main priorities is the privacy of our visitors.
          This Privacy Policy document contains types of information that is collected and recorded by <PEP /> and how we use it.
          If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
        </p>
      </div>

      <Section title='General Data Protection Regulation (GDPR)'>
        <p className='text-white text-balance'>
          We are a Data Controller of your information.{' '}
          <PEP /> legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:
        </p>
        <ul className='list-disc px-10 py-3 text-white'>
          <li><PEP /> needs to perform a contract with you</li>
          <li>You have given <PEP /> permission to do so</li>
          <li>Processing your personal information is in <PEP /> legitimate interests</li>
          <li><PEP /> needs to comply with the law</li>
        </ul>
        <p className='text-white text-balance'>
          <PEP /> will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy.
          We will retain and use your information to the extent necessary to comply with our legal obligations, resolve disputes, and enforce our policies.
          If you are a resident of the European Economic Area (EEA), you have certain data protection rights.
          If you wish to be informed what Personal Information we hold about you and if you want it to be removed from our systems, please contact us.
          In certain circumstances, you have the following data protection rights:
        </p>
        <ul className='list-disc px-10 pt-2 text-white'>
          <li>The right to access, update or to delete the information we have on you.</li>
          <li>The right of rectification.</li>
          <li>The right to object.</li>
          <li>The right of restriction.</li>
          <li>The right to data portability.</li>
          <li>The right to withdraw consent.</li>
        </ul>
      </Section>

      <Section title='Log Files'>
        <p className='text-white text-balance'>
          <PEP /> follows a standard procedure of using log files. These files log visitors when they visit websites.
          All hosting companies do this and a part of hosting services' analytics.
          The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP),
          date and time stamp, referring/exit pages, and possibly the number of clicks.
          These are not linked to any information that is personally identifiable.
          The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website,
          and gathering demographic information.
        </p>
      </Section>

      <Section title='Third Party Privacy Policies'>
        <p className='text-white text-balance'>
          <PEP />'s Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
          You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?
        </p>
      </Section>

      <Section title='Online Privacy Policy Only'>
        <p className='text-white text-balance'>
          Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in <PEP />.
          This policy is not applicable to any information collected offline or via channels other than this website.
        </p>
      </Section>

      <Section title='Consent'>
        <p className='text-white text-balance'>
          By using our website, you hereby consent to our Privacy Policy and agree to its terms.
        </p>
      </Section>
    </section>
  );
};

export default transition(PrivacyPolicy);
