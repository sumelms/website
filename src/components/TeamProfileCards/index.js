import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';
import useBaseUrl from "@docusaurus/useBaseUrl";

function WebsiteLink({to, children}) {
  return (
    <Link to={to}>
      {children || (
        <Translate id="team.profile.websiteLinkLabel">website</Translate>
      )}
    </Link>
  );
}

function TeamProfileCard({className, name, role, children, avatar, links}) {
  return (
    <div className={className}>
      <div className="card card--full-height">
        <div className="card__header">
          <div className="avatar avatar--vertical">
            <img
              className="avatar__photo avatar__photo--xl"
              src={avatar}
              alt={`${name}'s avatar`}
            />
            <div className="avatar__intro">
              <h3 className="avatar__name">{name}</h3>
              {role && (
                <h4 className="avatar__role">{role}</h4>
              )}
            </div>
          </div>
        </div>
        <div className="card__body">{children}</div>
        <div className="card__footer">
          <div className="button-group button-group--block">
            {links && links.map(({title, url}, index) => (
              <a key={index} className="button button--secondary" href={url}>
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function TeamProfileCardCol(props) {
  return (
    <TeamProfileCard {...props} className={'col col--6 margin-bottom--lg'} />
  );
}

export function CoreTeamRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Ricardo Lüders"
        role="Project Leader &amp; Engineer Leader"
        avatar="https://github.com/rluders.png"
        links={[
          {title: "Github", url: "https://github.com/rluders"},
          {title: "LinkedIn", url: "https://www.linkedin.com/in/ricardoluders"},
          {title: "Twitter", url: "https://twitter.com/rluders_"},
        ]}>
        <Translate id="team.profile.Ricardo Lüders.body">
          Holistic Software Engineer (the universe will fix the bug 🔮), Project Leader and Founder of the Sumé LMS, 
          that love technology, open-source, education, cats 🐱, video game 🎮, and music 🎼.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Ariane Rocha"
        role="Data Engineer Leader"
        avatar="https://github.com/arianerocha.png"        
        links={[
          {title: "Github", url: "https://github.com/arianerocha"},
          {title: "LinkedIn", url: "https://www.linkedin.com/in/arianerocha"},
        ]}>
        <Translate id="team.profile.Ariane Rocha.body">
        -
        </Translate>
      </TeamProfileCardCol>      
      <TeamProfileCardCol
        name="Izadora Ribeiro Perkoski"
        role="Digital Learning Coordinator"
        avatar={useBaseUrl("img/team/izadoraperkoski.jpg")}
        links={[
          {title: "Linkedin", url: "https://www.linkedin.com/in/izadoraperkoski/"},
        ]}>
        <Translate id="team.profile.Izadora Ribeiro Perkoski.body">
        PhD in Special Education (UFSCar), Master in Behavior Analysis (UEL) and 
        Bachelor of Psychology (FEPAR) works with development of educational 
        technologies and interventions based on games and gamification.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Mariany Ferreira da Silva"
        role="Front-end &amp; Data Engineer"
        avatar="https://github.com/marianyfs.png"
        links={[
          {title: "Github", url: "https://github.com/marianyfs"},
          {title: "LinkedIn", url: "https://www.linkedin.com/in/mariany-ferreira-da-silva-34b7b52b"},
          {title: "Twitter", url: "https://twitter.com/mariany_fs"}
        ]}>
        <Translate id="team.profile.Mariany Ferreira da Silva.body">
          Software Development Engineer, Hitchhiker from Magrathea Labs. I am 
          sometimes a mentor and always an apprentice. An occasional console gamer, 
          traveler and nature lover, family album photographer and a tech geek.
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}

export function ActiveTeamRow() {
  return (
    <div className="row">
      <TeamProfileCardCol
        name="Rafael Basask"
        avatar="https://github.com/basask.png"
        links={[
          {title: "Github", url: "https://github.com/basask"},
          {title: "LinkedIn", url: "https://www.linkedin.com/in/basask"},
        ]}>
        <Translate id="team.profile.Rafael Basask.body">
        Full "Slack" Developer (code only the minimum necessary). I'm sometimes a tutor and a 
        teacher and always an apprentice. An occasional gamer, musician, traveler, photographer 
        and a frequent programmer.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Camila Moura"
        role="Front-end &amp; Administrative Support"
        avatar="https://github.com/mouracamila.png"
        links={[
          {title: "Github", url: "https://github.com/mouracamila"},
          {title: "LinkedIn", url: "https://www.linkedin.com/in/camilacassianodemoura/"},
        ]}>
        <Translate
          id="team.profile.Camila Moura.body">
            -
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Gisele Votre"
        role="User Interface Designer "
        avatar={useBaseUrl("img/team/giselevotre.jpeg")}
        links={[
          {title: "LinkedIn", url: "https://www.linkedin.com/in/gisele-votre-235323115/"},
        ]}>
        <Translate
          id="team.profile.Gisele Votre.body">
            -
        </Translate>
      </TeamProfileCardCol>
    </div>    
  );
}