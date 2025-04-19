import React from 'react'
import transition from '../Transition';
const PrivacyPolicy = () => {
  return (
    <>
        <section className='h-full w-full flex flex-col p-8 lg:p-20'>
            <div className='content-center justify-center text-center '>
                <h1 className='text-white text-5xl  content-center justify-center items-center'
                >Privacy Policy for <span className='span'>PEP Konf</span>
                </h1>
            </div>
            <div className='py-10'><p className='text-white text-balance'>At <span className='span'>PEP Konf</span>, accessible from <a href="https://pepkonf.com"><u>https://www.pepkonf.com/</u></a>, one of our main priorities is the privacy of our visitors. 
                This Privacy Policy document contains types of information that is collected and recorded by Restoran Dubrovnik and how we use it.
                If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us.
                </p>
            </div>
            <div>
                <h2 className='text-white text-4xl content-center justify-center items-center'>General Data Protection Regulation (GDPR)</h2>
            </div>
            <div className='py-10'>
                <p className=' text-white text-balance'>
                We are a Data Controller of your information. 
                <span className='span'> PEP Konf</span> legal basis for collecting and using the personal information described in this Privacy Policy depends on the Personal Information we collect and the specific context in which we collect the information:
                </p>
                <ul className='list-disc px-10 py-3 text-white'>
                    <li><span className='span'>PEP Konf</span> needs to perform a contract with you</li>
                    <li>You have given <span className='span'>PEP Konf</span> permission to do so</li>
                    <li>Processing your personal information is in <span className='span'>PEP Konf</span> legitimate interests</li>
                    <li><span className='span'>PEP Konf</span> needs to comply with the law</li>
                </ul>
                <p className='text-white text-balance '>
                <span className='span'>PEP Konf</span> will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. 
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
                    <li>he right to data portability</li>
                    <li>The right to withdraw consent</li>
                </ul>
            </div>
            <div className=''>
                <h2 className='text-white text-4xl content-center justify-center items-center'>Log Files</h2>
                <div className='py-10'>
                    <p className='text-white text-balance pt-5'><span className='span'>PEP Konf</span> follows a standard procedure of using log files. These files log visitors when they visit websites. 
                        All hosting companies do this and a part of hosting services' analytics. 
                        The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), 
                        date and time stamp, referring/exit pages, and possibly the number of clicks. 
                        These are not linked to any information that is personally identifiable. 
                        The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, 
                        and gathering demographic information.</p>
                </div>
            </div>
            <div>
                <h2 className='text-white text-4xl content-center justify-center items-center'>
                    Third Party Privacy Policies
                </h2>
                <div>
                    <p className='text-white text-balance pt-5'>
                    <span className='span'>PEP Konf's</span> Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. You may find a complete list of these Privacy Policies and their links here: Privacy Policy Links.
                    You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?
                    </p>
                </div>
            </div>
            <div className='py-10'>
                <h2 className='text-white text-4xl content-center justify-center items-center'>Online Privacy Policy Only</h2>
                <div className=''>
                    <p className='text-white text-balance pt-5'>Our Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in <span className='span'>PEP Konf</span>. 
                    This policy is not applicable to any information collected offline or via channels other than this website.</p>
                </div>
            </div>
            <div className=''>
                <h2 className='text-white text-4xl content-center justify-center items-center'>Consent</h2>
                <div>
                    <p className='text-white text-balance pt-5'>By using our website, you hereby consent to our Privacy Policy and agree to its terms.</p>
                </div>
            </div>
        </section>
    </>
  )
}

export default transition(PrivacyPolicy)
