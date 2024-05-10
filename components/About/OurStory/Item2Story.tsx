import Image from "next/image";
import Link from "next/link";

const Item2Story = () => {
  return (
    <div className='flex flex-wrap-reverse lg:flex-wrap gap-y-10 gap-x-[6rem] mt-10 md:mt-32 justify-between items-center'>
      <div className='relative w-full md:md:max-w-[450px]'>
        <Image src='/images/About/poza 2.jpg' unoptimized={true} alt='About home 2' className='rounded-[28.5px] w-full md:w-[450px] md:h-[400px] object-cover mx-auto lg:mx-0' object-fit='cover' width={1024} height={1024} />
        <Image src='/images/patrat.svg' className='absolute left-[-1.25rem] lg:left-[-4.25rem] bottom-[-2rem] rotate-2 w-[150px]' width={150} height={150} alt='Polygon img' />
      </div>
      <div className='w-full xl:max-w-[48%]'>
        <h2 className='text-secondary font-bold text-xl mb-6 md:text-xl lg:text-2xl xl:text-3xl'>Care este misiunea noastră?</h2>
        <p className='text-secondary font-normal text-[14px] md:text-base mt-5'>
          Misiunea noastră este de a oferi servicii de marketing de înaltă calitate, care să genereze rezultate tangibile pentru afacerea ta. Ne concentrăm pe construirea unei relații solide cu clienții noștri, bazată pe încredere, colaborare și excelență. Înțelegem perfect cât de important este pentru tine ca afacerea să se dezvolte și să genereze profit atât pentru tine, cât și pentru angajații tăi. Principalele noastre obiective sunt:
        </p>
        <ul className='list-none mt-4'>
            <li className='flex gap-5 items-center'>
              <span className='text-secondary w-8 h-8 min-w-[32px] rounded-[50%] bg-primary flex items-center justify-center font-medium'>1</span>
              <p className='text-secondary text-[14px] md:text-base font-semibold'>Să ne extindem portofoliului de clienți mulumiți. </p>
            </li>
            <li className='flex gap-5 items-center mt-4'>
              <span className='text-white w-8 h-8 min-w-[32px] rounded-[50%] bg-[#079800] flex items-center justify-center font-medium'>2</span>
              <p className='text-secondary text-[14px] md:text-base font-semibold'>Optimizarea ratelor de conversie prin testarea și îmbunătățirea serviciilor.</p>
            </li>
            <li className='flex gap-5 items-center mt-4'>
              <span className='text-white px-[15px] w-8 h-8 rounded-[50%] bg-[#1F7D1B] flex items-center justify-center font-medium'>3</span>
              <p className='text-secondary text-[14px] md:text-base font-semibold'>Extinderea companiei prin servicii noi oferite.</p>
            </li>
        </ul>
        <div className='flex gap-4 mt-6'>
            <Link href='/shop' className='py-3 bg-primary text-onPrimary rounded-[28.5px] font-semibold px-12 hover:scale-[1.05] transition-all'>Shop</Link>
            <Link href='/testimoniale' className='py-3 bg-transparent text-onPrimary rounded-[28.5px] border-2 border-primary font-semibold px-12 hover:scale-[1.05] transition-all'>Testimoniale</Link>
        </div>
      </div>
    </div>
  );
};

export default Item2Story;
