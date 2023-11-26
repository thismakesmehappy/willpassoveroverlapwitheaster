import Expandable from "components/expandable/Expandable.tsx";

function About() {
  return (
    <Expandable
      title="About"
      id="about"
      classNameExpanded="col col-12 col-md-10 col-lg-7 m-auto"
      classNameCollapsed="col col-12 col-md-6 col-lg-4 m-auto"
      className="alert-dark"
    >
      <>
        <p>
          My partner's family is Catholic Italian. I'm Jewish. His family's
          Easter traditions include making Easter bread, baking cheese and rice
          pies, making stuffed pizza, and a lamb cake. As a Passover-observing
          Jew, I can't eat any of that during Passover. So every year we need to
          compare schedules to determine whether we have to pre-celebrate Easter
          or if I can partake in real time. On years that the holidays overlap
          (most of them) we look ahead several years to figure out the next time
          I can have a bread-full Easter. I developed this app to make it easier
          to look forward to all the delicious sharing.
        </p>
        <p>
          Why only Easter Sunday? While Easter extends a few days, the family
          gathers on Easter Sunday, as most families do. There are different
          wheaty treats throughout the week, but our main concern is being able
          to celebrate with the family.
        </p>
        <p>
          Designed and developed by{" "}
          <a
            href="http://www.bernardo.onl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Bernardo Margulis
          </a>{" "}
          /{" "}
          <a
            href="http://www.thismakesmehappy.co"
            target="_blank"
            rel="noopener noreferrer"
          >
            This Makes Me Happy
          </a>
          .
        </p>
        <p>
          This app was developed using{" "}
          <a
            href="https://www.hebcal.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hebcal's
          </a>{" "}
          JavaScript library{" "}
          <a
            href="https://www.npmjs.com/package/@hebcal/core#hebcalcore"
            target="_blank"
            rel="noopener noreferrer"
          >
            @hebcal/core
          </a>
          , and the{" "}
          <a href="https://www.npmjs.com/package/date-holidays?activeTab=readme">
            date-holidays
          </a>{" "}
          library.
        </p>
      </>
    </Expandable>
  );
}

export default About;
