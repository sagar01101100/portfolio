import Image from "next/image";

export default function AboutPooja() {
  return (
    <section
      id="about"
      className="bg-gradient-to-br from-pink-50 to-blue-50 py-20 px-6 md:px-20 text-gray-800 flex flex-col md:flex-row items-center gap-12"
    >
      {/* Image Section */}
      <div className="flex-shrink-0">
        <Image
          src="/image.png"
          alt="Pooja"
          width={300}
          height={300}
          className="rounded-full shadow-lg object-cover border-4 border-white"
        />
      </div>

      {/* Text Section */}
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-pink-700 border-b-4 border-pink-400 inline-block">
           Meet Pooja,
        </h2>
        <p className="text-lg leading-8">
          Hi, I’m <span className="font-semibold text-pink-700">Pooja</span>, a 12th passout from West Bengal, soon starting my new journey 
          in <span className="font-medium text-blue-600">Bangalore</span> as a nursing student.
          I’ve always believed in caring for others, and nursing is not just a profession to me — it’s a purpose.
        </p>

        <p className="mt-4 text-lg leading-8">
          I find peace in the soft melodies of <span className="italic text-purple-600">Rabindra Sangeet</span>, and I often listen to it during quiet evenings, 
          sipping tea and dreaming about life in a new city. The music reminds me of home — of simplicity, love, and strength.
        </p>

        <p className="mt-4 text-lg leading-8">
          I love writing in my journal, watching Bengali movies, and sometimes helping my mom in the kitchen.
          I believe small things bring the biggest happiness. I may be stepping into a big city, but my heart will always carry the 
          warmth of my hometown.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-600 italic">
          “Kindness is the language which the deaf can hear and the blind can see.” – Mark Twain
        </p>
      </div>
    </section>
  );
}
