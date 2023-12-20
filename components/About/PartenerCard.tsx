import Stars from "./Stars"

type Props = {
  numberOfStars: number
  experienceRating: number
  transparencyRating: number
  feedBackRating: number
  humanResourcesRating: number
  cui: string
  name: string
  nr: string
}

const PartenerCard = ({ numberOfStars, experienceRating, feedBackRating, humanResourcesRating, transparencyRating, cui, name, nr }: Props) => {
  return (
    <div className="w-full bg-[#f2fcf2] rounded-[22px] border-[1px] border-[#d5fdd4] mx-8 md:px-16 py-8 px-4 flex flex-col">
      <p className="text-secondary font-bold text-[18px] md:text-[22px]">{name}</p>
      <p className="text-[#6D6D6D] text-[14px] md:text-[16px] mt-4">{cui} | {nr}</p>
      <Stars
        numberOfStars={numberOfStars}
      />

      <div className="flex flex-row mt-4 items-center">
        <div className="w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] border-secondary border-2 rounded-md mr-4">
          <div className="bg-secondary rounded-e-md p-1 py-[2px]" style={{width: (experienceRating/2).toString()+'%'}}>
            <p className="text-onSecondary text-[14px] font-semibold">Experiență</p>
          </div>
        </div>
        <p className="text-secondary font-semibold text-[15px]">{experienceRating} / 200</p>
      </div>

      <div className="flex flex-row mt-[10px] items-center">
        <div className="w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] border-primary border-2 rounded-md mr-4">
          <div className="bg-primary rounded-e-md p-1 py-[2px]" style={{width: (transparencyRating/2).toString()+'%'}}>
            <p className="text-onPrimary text-[14px] font-semibold">Transparență</p>
          </div>
        </div>
        <p className="text-secondary font-semibold text-[15px]">{transparencyRating} / 200</p>
      </div>

      <div className="flex flex-row mt-[10px] items-center">
        <div className="w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] border-[#079800] border-2 rounded-md mr-4">
          <div className="bg-[#079800] rounded-e-md p-1 py-[2px]" style={{width: (feedBackRating/2).toString()+'%'}}>
            <p className="text-onSecondary text-[14px] font-semibold">Feedback</p>
          </div>
        </div>
        <p className="text-secondary font-semibold text-[15px]">{feedBackRating} / 200</p>
      </div>

      <div className="flex flex-row mt-[10px] items-center">
        <div className="w-[70%] md:w-[75%] lg:w-[80%] xl:w-[85%] border-[#1F7D1B] border-2 rounded-md mr-4">
          <div className="bg-[#1F7D1B] rounded-e-md p-1 py-[2px]" style={{width: (humanResourcesRating/2).toString()+'%'}}>
            <p className="text-onSecondary text-[14px] font-semibold">Resurse umane</p>
          </div>
        </div>
        <p className="text-secondary font-semibold text-[15px]">{humanResourcesRating} / 200</p>
      </div>
    </div>
  )
}

export default PartenerCard