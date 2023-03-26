import Image from "next/image";
import { OurClientsTestimonial } from "../../Home/OurClients/OurClients";

const TestimonialItem = ({
  text,
  by,
  image,
}: Omit<OurClientsTestimonial, "id">) => {
  return (
    <article className="bg-[#011857] rounded-[16px] justify-center md:justify-between items-center flex-col md:flex-row gap-y-5 flex flex-1 pt-10 md:pt-5">
      <div className="w-full md:w-200px px-7 md:px-5 py-2">
        <h3 className="text-white font-bold text-base md:max-w-[90%] md:text-[24px]">
          {text}
        </h3>
        <p className="text-sm text-[#B8CCFF] font-medium mt-2">{by}</p>
        <p className="text-[#B8CCFF] font-medium mt-2">
          Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce
          sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla
          libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
        </p>
      </div>
      <Image
        src={image}
        blurDataURL="/images/ourclients.png"
        alt="Our clients"
        width={200}
        height={200}
        className="mt-auto w-[250px] md:mr-5 rounded-[18px]"
      />
    </article>
  );
};

export default TestimonialItem;
