import Image from "next/image";
import Link from "next/link";

const Item1Story = () => {
  return (
    <article className="flex flex-wrap gap-x-20 gap-y-10 mt-10 md:mt-20 justify-between items-center">
      <div className="flex-1">
        <h2 className="text-[#00103C] font-bold text-xl mb-3 md:text-xl lg:text-2xl xl:text-4xl">
          Care este povestea noastră?
        </h2>
        <p className="text-[#00103C] font-normal text-base">
          Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce
          sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla
          libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
        </p>
        <br />
        <p className="text-[#00103C] font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies
          nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus
          a auctor sapien, sed viverra erat. Cras aliquam auctor urna.
          Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor
          finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla
          facilisis est lorem, tincidunt elementum felis bibendum eu.
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/news"
            className="p-2 bg-[#01EA88] text-[#00103C] rounded-[28.5px] font-medium px-10 text-xs md:text-base"
          >
            noutăți
          </Link>
          <Link
            href="/shop"
            className="p-2 bg-transparent text-[#00103C] rounded-[28.5px] border-2 border-[#006CFF] font-medium px-10 text-xs md:text-base"
          >
            shop
          </Link>
        </div>
      </div>
      <Image
        src="/images/ourstory-1.png"
        alt="Our Story 2"
        className="w-full md:max-w-[450px] rounded-[35px] md:mr-[4%]"
        width={300}
        height={300}
      />
    </article>
  );
};

export default Item1Story;
