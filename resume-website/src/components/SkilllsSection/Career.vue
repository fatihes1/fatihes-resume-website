<template>
  <div class="accordion mx-2" id="accordionExample">
    <div class="accordion-item bg-white border border-gray-200">
      <h2 class="accordion-header mb-0" id="headingOne">
        <button
          class="accordion-button relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseOne"
          aria-expanded="true"
          aria-controls="collapseOne"
        >
          <div class="flex flex-row w-full">
            <div class="w-2/6 md:w-1/6">
              <img
                src="@/assets/images/companies/nette.jpeg"
                class="w-20 h-20 rounded-md"
                alt="avatar"
              />
            </div>
            <div class="ml-3 text-gray-700 w-4/6 flex flex-col justify-center">
              <h1 class="text-xl md:text-2xl font-semibold">
                Software Developer
              </h1>
              <h2 class="text-sm md:text-base font-medium">
                Nette Interactive - Long Term Intern
              </h2>
            </div>
            <div
              class="text-gray-700 hidden md:flex md:w-1/6 flex-row justify-center items-center"
            >
              <h2>Oct 2022 - Currently</h2>
            </div>
          </div>
        </button>
      </h2>
      <div
        id="collapseOne"
        class="accordion-collapse collapse show"
        aria-labelledby="headingOne"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5">
          <p>
            &bull; Created corporate web pages with panels using
            <strong>Laravel</strong>.
          </p>
          <p>
            &bull; Created a web application for managing the company's
            <strong>clients</strong> and <strong>projects</strong> using
            <strong>Laravel</strong>.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item bg-white border border-gray-200">
      <h2 class="accordion-header mb-0" id="headingTwo">
        <button
          class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseTwo"
          aria-expanded="false"
          aria-controls="collapseTwo"
        >
          <div class="flex flex-row w-full">
            <div class="w-2/6 md:w-1/6">
              <img
                src="@/assets/images/companies/jotform.png"
                class="w-20 h-20 rounded-md"
                alt="avatar"
              />
            </div>
            <div class="ml-3 text-gray-700 w-4/6 flex flex-col justify-center">
              <h1 class="text-xl md:text-2xl font-semibold">
                Full Stack Web Developer
              </h1>
              <h2 class="font-medium text-sm md:text-base">JotForm - Intern</h2>
            </div>
            <div
              class="text-gray-700 w-1/6 hidden md:flex flex-row justify-center items-center"
            >
              <h2>Jul 2022 - Aug 2022</h2>
            </div>
          </div>
        </button>
      </h2>
      <div
        id="collapseTwo"
        class="accordion-collapse collapse"
        aria-labelledby="headingTwo"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5">
          <p>
            &bull; Created dashboard using <strong>PHP</strong> and
            <strong>React.js</strong> for load tests.
          </p>
          <p>
            &bull; Loader.io, which is an external API, is
            <strong>embedded</strong> in the web application using
            <strong>PHP</strong> language.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item bg-white border border-gray-200">
      <h2 class="accordion-header mb-0" id="headingThree">
        <button
          class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseThree"
          aria-expanded="false"
          aria-controls="collapseThree"
        >
          <div class="flex flex-row w-full">
            <div class="w-2/6 md:w-1/6">
              <img
                src="@/assets/images/companies/tubitak.png"
                class="w-20 h-20 rounded-md bg-white"
                alt="avatar"
              />
            </div>
            <div class="ml-3 text-gray-700 w-4/6 flex flex-col justify-center">
              <h1 class="text-xl md:text-2xl font-semibold">
                Software Developer
              </h1>
              <h2 class="font-medium text-sm md:text-base">
                TUBITAK - Scholarship
              </h2>
            </div>
            <div
              class="text-gray-700 w-1/6 hidden md:flex flex-row justify-center items-center"
            >
              <h2>Oct 2021 - Jul 2022</h2>
            </div>
          </div>
        </button>
      </h2>
      <div
        id="collapseThree"
        class="accordion-collapse collapse"
        aria-labelledby="headingThree"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5">
          <p>
            &bull; Worked as a scholarship developer in the
            <strong>open-source</strong> project supported by TUBITAK.
          </p>
          <p>
            &bull; Assisted in the development a
            <strong>backend API</strong> with the
            <strong>PHP</strong> programming language.
          </p>
          <p>
            &bull; Made improvements on the pages where user interact with
            <strong>Vue.js</strong> framework.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item bg-white border border-gray-200">
      <h2 class="accordion-header mb-0" id="headingThree">
        <button
          class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFour"
          aria-expanded="false"
          aria-controls="collapseFour"
        >
          <div class="flex flex-row w-full">
            <div class="w-2/6 md:w-1/6">
              <img
                src="@/assets/images/companies/karegen.jpeg"
                class="w-20 h-20 rounded-md bg-white"
                alt="avatar"
              />
            </div>
            <div class="ml-3 text-gray-700 w-4/6 flex flex-col justify-center">
              <h1 class="text-xl md:text-2xl font-semibold">
                Full Stack Web Developer
              </h1>
              <h2 class="font-medium text-sm md:text-base">
                Kargen.com - Intern
              </h2>
            </div>
            <div
              class="text-gray-700 w-1/6 hidden md:flex flex-row justify-center items-center"
            >
              <h2>Jun 2021 - Aug 2021</h2>
            </div>
          </div>
        </button>
      </h2>
      <div
        id="collapseFour"
        class="accordion-collapse collapse"
        aria-labelledby="headingFour"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5">
          <p>
            &bull; Designed and coded web pages parts such as slider, footer,
            about section with <strong>JavaScript</strong>.
          </p>
          <p>
            &bull; Learned the <strong>MVC structure</strong> with
            <strong>Laravel</strong> and developed
            <strong>online quiz system</strong> with them.
          </p>
        </div>
      </div>
    </div>
    <div class="accordion-item bg-white border border-gray-200">
      <h2 class="accordion-header mb-0" id="headingFive">
        <button
          class="accordion-button collapsed relative flex items-center w-full py-4 px-5 text-base text-gray-800 text-left bg-white border-0 rounded-none transition focus:outline-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseFive"
          aria-expanded="false"
          aria-controls="collapseFive"
        >
          <div class="flex flex-row w-full">
            <div class="w-2/6 md:w-1/6">
              <img
                src="@/assets/images/companies/mtm.png"
                class="w-20 h-20 rounded-md bg-white"
                alt="avatar"
              />
            </div>
            <div class="ml-3 text-gray-700 w-4/6 flex flex-col justify-center">
              <h1 class="text-xl md:text-2xl font-semibold">Data Science</h1>
              <h2 class="font-medium text-sm md:text-base">
                Meet the Music - Intern
              </h2>
            </div>
            <div
              class="text-gray-700 w-1/6 hidden md:flex flex-row justify-center items-center"
            >
              <h2>May 2021 - Aug 2021</h2>
            </div>
          </div>
        </button>
      </h2>
      <div
        id="collapseFive"
        class="accordion-collapse collapse"
        aria-labelledby="headingFive"
        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body py-4 px-5">
          <p>
            &bull; Created a web dashboard system with
            <strong>Flask</strong> that visualize the instantly updated user
            data with <strong>matplotlib</strong> and
            <strong>seaborn</strong> libraries of the <strong>Python</strong>.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
