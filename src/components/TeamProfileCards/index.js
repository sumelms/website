import React from 'react';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

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
        role="Project Leader &amp; Lead Engineer"
        avatar="https://github.com/rluders.png"
        links={[
          {title: "Github", url: "https://github.com/rluders"},
          {title: "Twitter", url: "https://twitter.com/rluders_"},
        ]}>
        <Translate id="team.profile.Ricardo Lüders.body">
          Holistic Software Engineer (the universe will fix the bug 🔮), Project Leader and Founder of the Sumé LMS, 
          that love technology, open-source, education, cats 🐱, video game 🎮, and music 🎼.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Ariane Rocha"
        role="Leader Data Analyst"
        avatar="https://github.com/arianerocha.png"        
        links={[
          {title: "Github", url: "https://github.com/arianerocha"},
        ]}>
        <Translate id="team.profile.Ariane Rocha.body">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, leo eu 
        blandit eleifend, sapien neque auctor odio, nec luctus lectus dui id erat. Sed varius 
        euismod mauris a scelerisque. Pellentesque lacinia urna vitae porta venenatis.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Camila Moura"
        role="Pedagogical &amp; Technical Support"
        avatar="https://github.com/mouracamila.png"
        links={[
          {title: "Github", url: "https://github.com/mouracamila"},
        ]}>
        <Translate
          id="team.profile.Camila Moura.body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, leo eu 
            blandit eleifend, sapien neque auctor odio, nec luctus lectus dui id erat. Sed varius 
            euismod mauris a scelerisque. Pellentesque lacinia urna vitae porta venenatis.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Izadora Ribeiro Perkoski"
        role="Pedagogical &amp; Data Analyst"
        avatar="#missing"
        links={[
          {title: "Linkedin", url: "https://www.linkedin.com/in/izadoraperkoski/"},
        ]}>
        <Translate id="team.profile.Izadora Ribeiro Perkoski.body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, leo eu 
          blandit eleifend, sapien neque auctor odio, nec luctus lectus dui id erat. Sed varius 
          euismod mauris a scelerisque. Pellentesque lacinia urna vitae porta venenatis.
        </Translate>
      </TeamProfileCardCol>
      <TeamProfileCardCol
        name="Mariany Ferreira da Silva"
        role="Front-end &amp; Data Analyst"
        avatar="https://github.com/marianyfs.png"
        links={[
          {title: "Github", url: "https://github.com/marianyfs"},
        ]}>
        <Translate id="team.profile.Mariany Ferreira da Silva.body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, leo eu 
          blandit eleifend, sapien neque auctor odio, nec luctus lectus dui id erat. Sed varius 
          euismod mauris a scelerisque. Pellentesque lacinia urna vitae porta venenatis.
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
        ]}>
        <Translate id="team.profile.Rafael Basask.body">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum molestie, leo eu 
          blandit eleifend, sapien neque auctor odio, nec luctus lectus dui id erat. Sed varius 
          euismod mauris a scelerisque. Pellentesque lacinia urna vitae porta venenatis.
        </Translate>
      </TeamProfileCardCol>
    </div>
  );
}