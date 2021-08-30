import { TimelineBox } from "./timeline/timelineBox"

export const TimeLine = () => {
  return (
    <div id="timeline" className="flex flex-col overflow-hidden pt-20 mb-40">
      <div className="timeline p-5">
        <h2 className="my-5 text-base font-medium tracking-tight text-purple uppercase text-center xl:text-3xl">Our Timeline</h2>
        <h3
          className="max-w-2xl px-5 mt-2 text-3xl font-black leading-tight text-center text-gray-800 sm:mt-0 sm:px-0 sm:text-6xl">
          Road map for tishatsu T-shirt</h3>
        <TimelineBox
          isFirst
          heading="100 holders"
          description='Tishatsu T-shirt owners will be able to name their T-shirts.'
        />
        <TimelineBox
          heading="500 holders"
          description="We will be printing and sending the tishatsu T-shirt to the owner of it’s NFT."
        />
        <TimelineBox
          heading="1000 holders"
          isLast
          description="We will provide the necessary files for the tishatsu T-shirt to be
          printed and to be used in AR app or in the metaverse."
        />
      </div>
    </div>
  )
}