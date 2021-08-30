export const TimelineBox = (props) => {
  const { isFirst, isLast, heading, description } = props;
  return (
    <div className="flex flex-row timelinepara text-xl md:text-2xl">
      <div className="h-full w-full">
        <div className="grid grid-row-2 relative h-full w-full">
          <div className={`w-full ${!isFirst && 'leftArr'}`}></div>
          <div className="w-full"></div>
        </div>
      </div>
      <div className={`shadow-lg p-5 mb-4 mt-4 ${heading && 'divide-y divide-gray-400'}`}>
        {heading && <div className="font-bold text-purple">
          {heading}
        </div>}
        <div className="text-gray-600">
          {description}
        </div>
      </div>
      {!isLast && <div className="h-full w-full">
        <div className="grid grid-row-2 relative h-full w-full">
          <div className="h-full w-full"></div>
          <div className="w-full rightArr"></div>
        </div>
      </div>}
    </div>
  )
}