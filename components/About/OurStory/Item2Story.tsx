import Image from "next/image";
import Link from "next/link";

const Item2Story = () => {
  return (
    <article className="flex flex-wrap flex-col-reverse md:flex-row gap-5 gap-y-10 mt-10 md:mt-20 justify-between items-center">
      <Image
        src="/images/ourstory-2.png"
        alt="Our Story 2"
        className="w-full md:max-w-[450px] rounded-[35px] md:mr-[4%]"
        width={300}
        height={300}
      />
      <div className="flex-1">
        <h2 className="text-[#260056] font-bold text-xl mb-3 md:text-xl lg:text-2xl xl:text-4xl">
          Misiunea Consultify
        </h2>
        <p className="text-[#260056] font-normal text-base">
          Mauris tristique pulvinar massa, ut hendrerit enim pretium nec. Fusce
          sed dolor est. Praesent non maximus lorem, nec sagittis metus. Nulla
          libero nisl, scelerisque et imperdiet mattis, suscipit eu elit.
        </p>
        <br />
        <p className="text-[#260056] font-normal text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ultricies
          nibh vel massa iaculis porttitor. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. In pretium ac orci at convallis. Vivamus
          a auctor sapien, sed viverra erat. Cras aliquam auctor urna.
          Pellentesque molestie orci quis leo ornare dapibus. Nulla auctor
          finibus aliquam. Etiam vitae efficitur orci, id gravida sapien. Nulla
          facilisis est lorem, tincidunt elementum felis bibendum eu.{" "}
        </p>
        <div className="flex gap-4 mt-4">
          <Link
            href="/testimoniale"
            className="p-2 bg-transparent text-[#260056] rounded-[28.5px] border-2 border-[#01EA88] font-medium px-10 text-xs md:text-base"
          >
            testimoniale
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Item2Story;
