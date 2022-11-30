import { Timeline } from '@mui/lab'
import { Button } from '@mui/material'
import { useTranslation } from 'react-i18next'
import SmoothList from 'react-smooth-list'
import ExperienceItem from '../../components/experience'
import felixinLogo from '../../assets/images/felixin.png'
import arashwebLogo from '../../assets/images/arashweb.png'
import SkillItem from '../../components/skill'
import cv from '../../cv.pdf'
import './style.scss'

function ResumePage() {
  const { t } = useTranslation()
  const downloadCv = () => {
    const anchor = document.createElement('a')
    anchor.setAttribute('href', cv)
    anchor.setAttribute('download', '')
    anchor.click()
  }

  return (
    <div className="resume-page">
      <div>
        <SmoothList>
          <div className="experience">
            <h1 className="title">{t('experience')}</h1>
            <ExperienceItem
              company={t('felixin')}
              link="https://felixin.io/"
              logo={felixinLogo}
              date={t('felixin-hire-date')}
              role={t('fulltime-remote')}
              description={t('felixin-hire-description')}
            />
            <ExperienceItem
              company={t('felixin')}
              link="https://felixin.io/"
              date={t('felixin-intern-date')}
              logo={felixinLogo}
              role={t('intern')}
              description={t('felixin-intern-description')}
              delay={100}
            />
            <ExperienceItem
              company={t('arashweb')}
              link="https://arashweb.com/"
              logo={arashwebLogo}
              date={t('arashweb-date')}
              role={t('intern')}
              description={t('arashweb-description')}
              delay={200}
            />
          </div>
        </SmoothList>
        <SmoothList delay={300}>
          <div className="education">
            <h2 className="title">{t('education')}</h2>
            <p>{t('education-description')}</p>
          </div>
        </SmoothList>
        <SmoothList delay={400}>
          <div className="personality">
            <h2 className="title">{t('personality')}</h2>
            <ul>
              <li>{t('trustworthy')}</li>
              <li>{t('teamwork')}</li>
              <li>{t('learner')}</li>
              <li>{t('listener')}</li>
            </ul>
            <Button onClick={downloadCv} className="download-cv-button">
              {t('Download-cv')}
            </Button>
          </div>
        </SmoothList>
      </div>
      <div className="skills">
        <SmoothList>
          <h2 className="title">{t('skills')}</h2>
          <Timeline position="alternate" style={{ direction: 'ltr' }}>
            <SkillItem
              title="OOP"
              description="c++, algorithms, data structures"
            />
            <SkillItem title="HTML" description="web basics" />
            <SkillItem
              title="CSS"
              description="grid, flexbox, mediaQuery, sass"
            />
            <SkillItem title="GIT" description="basic usage, github, gitlab" />
            <SkillItem
              title="JavaScript"
              description="ES6, JSON, Objects, Async/await, Promises, DOM, BOM, APIs, Hoisting, IIFE, Events, browser storages, "
            />
            <SkillItem
              title="React"
              description="React-query, React-Router, Antdesign and MaterialUI, i18n, npm and yarn, hooks, formik, axios, eslint, ssg and ssr (nextjs)"
            />
            <SkillItem
              title="React Native"
              description="Android studio, Xcode and ios, Expo, Deep linking"
            />
            <SkillItem
              title="Typescript"
              description="types, jsx, narrowing, enums, ..."
            />
            <SkillItem
              title="Node"
              description="Restful API, mysql, mongoDB, express"
            />
            <SkillItem
              title="Linux"
              description="basic commands, terminal usage"
            />
            <SkillItem
              title="other"
              description="Scrum, trello, slack, googling, office"
            />
          </Timeline>
        </SmoothList>
      </div>
    </div>
  )
}

export default ResumePage
