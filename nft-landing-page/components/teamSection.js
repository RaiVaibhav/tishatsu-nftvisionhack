import { ProfileCard } from "./profileCard"
import v from '../public/de2.jpg';
import s from '../public/d.jpg';
import a from '../public/de.jpg';

export const OurTeam = () => {
  return (
    <div id="team" className="flex flex-col overflow-hidden pt-20 bg-gray-100 items-center">
      <h2 className="my-5 pt-10 text-base font-medium tracking-tight text-purple uppercase text-center lg:text-3xl">Meet Our Team</h2>
      <div className="flex flex-row container max-w-7xl mx-auto flex-wrap py-6 justify-center xl:justify-between sm:py-12">
        <ProfileCard imageSrc={s} description="@tishatsudesigner"/>
        <ProfileCard imageSrc={v} description="@tishatsudeveloper"/>
        <ProfileCard imageSrc={a} description="@tishatsublockchaidev"/>
      </div>

    </div>
  )
}