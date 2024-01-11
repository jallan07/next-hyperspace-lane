export const Quotes = async () => {
  return (
    <section className="mt-20">
      <div className="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-ss-lg md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-aurebesh font-semibold text-gray-900 dark:text-white">
              He's as clumsy as he is stupid.
            </h3>
            <p className="italic text-sm">"He's as clumsy as he is stupid."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-9 h-12"
              src="https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  dark:text-white text-left rtl:text-right ms-3">
              <p className="font-aurebesh">Darth Vader</p>
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                Darth Vader
              </p>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-se-lg dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-aurebesh font-semibold text-gray-900 dark:text-white">
              I don't believe in chance.
            </h3>
            <p className="italic text-sm">"I don't believe in chance."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-9 h-12"
              src="https://vignette.wikia.nocookie.net/starwars/images/b/bf/PloKoonCardTrader.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  dark:text-white text-left rtl:text-right ms-3">
              <p className="font-aurebesh">Plo Koon</p>
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                Plo Koon
              </p>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-aurebesh font-semibold text-gray-900 dark:text-white">
              They fly now.
            </h3>
            <p className="italic text-sm">"They fly now."</p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-9 h-12"
              src="https://vignette.wikia.nocookie.net/starwars/images/7/79/Poe_Dameron_TLJ.png"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  dark:text-white text-left rtl:text-right ms-3">
              <p className="font-aurebesh">Poe Dameron</p>
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                Poe Dameron
              </p>
            </div>
          </figcaption>
        </figure>
        <figure className="flex flex-col items-center justify-center p-8 text-center bg-white border-b border-gray-200 md:rounded-es-lg md:border-b-0 md:border-e dark:bg-gray-800 dark:border-gray-700">
          <blockquote className="max-w-2xl mx-auto mb-4 text-gray-500 lg:mb-8 dark:text-gray-400">
            <h3 className="text-lg font-aurebesh font-semibold text-gray-900 dark:text-white">
              Hold me, like you did by the lake on Naboo.
            </h3>
            <p className="italic text-sm">
              "Hold me, like you did by the lake on Naboo."
            </p>
          </blockquote>
          <figcaption className="flex items-center justify-center ">
            <img
              className="rounded-full w-9 h-12"
              src="https://vignette.wikia.nocookie.net/starwars/images/b/b2/Padmegreenscrshot.jpg"
              alt="profile picture"
            />
            <div className="space-y-0.5 font-medium  dark:text-white text-left rtl:text-right ms-3">
              <p className="font-aurebesh">Padme Amidala</p>
              <p className="text-sm italic text-gray-500 dark:text-gray-400">
                Padme Amidala
              </p>
            </div>
          </figcaption>
        </figure>
      </div>
    </section>
  );
};
