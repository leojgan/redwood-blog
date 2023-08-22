import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />

      <p>
        This site was created to demonstrate my mastery of Redwood:
        <blockquote><i>Look upon my works, ye mighty, and dispair!</i></blockquote>
        Find me in <code>./web/src/pages/AboutPage/AboutPage.jsx</code>
      </p>
    </>
  )
}

export default AboutPage
