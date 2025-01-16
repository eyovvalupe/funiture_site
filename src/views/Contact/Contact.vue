<template>
  <div class="contact-wrapper">
    <section class="contact-section">
      <div class="container mx-auto p-5">
        <div class="mt-28 flex flex-col gap-10">
          <h1
            class="text-[30px] text-[#3B3B98] font-bold border-b border-[#E2E8F0]"
          >
            {{ $t("contact.contact") }}
          </h1>
          <div
            class="flex flex-col sm:flex-row items-center justify-start gap-5"
          >
            <a
              href="#"
              class="phone bg-[#E2E8F0] w-full sm:w-[300px] flex items-center gap-5 shadow-lg p-2 hover:shadow-xl hover:w-[350px]"
            >
              <img
                src="https://t4.ftcdn.net/jpg/04/63/63/59/360_F_463635935_IweuYhCqZRtHp3SLguQL8svOVroVXvvZ.jpg"
                alt=""
                class="w-[50px] h-[50px] object-cover rounded-lg"
              />
              <h1 class="text-[16px] sm:text-[20px] text-[#3B3B98] font-bold">
                +998901234567
              </h1>
            </a>
            <a
              href="#"
              class="email bg-[#E2E8F0] w-full sm:w-[300px] flex items-center gap-5 shadow-lg p-2 hover:shadow-xl hover:w-[350px]"
            >
              <img
                src="https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA1L3Y5MzItbmluZy0yMF8xXzEuanBn.jpg"
                alt=""
                class="w-[50px] h-[50px] object-cover rounded-lg"
              />
              <h1 class="text-[16px] sm:text-[20px] text-[#3B3B98] font-bold">
                logo@gmail.com
              </h1>
            </a>
          </div>
          <div>
            <form action="#" class="w-full">
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-10"
              >
                <label
                  for="first_name"
                  class="w-full sm:w-[48%] text-[16px] sm:text-[18px] text-[#3B3B98] mb-5 sm:mb-0 font-bold"
                  >{{ $t("contact.firstname") }}
                  <input
                    id="first_name"
                    type="first_name"
                    placeholder="John"
                    class="w-full p-5 rounded-lg text-black mt-1 text-[14px] sm:text-[16px] outline-none border border-[#3B3B98]"
                  />
                </label>
                <label
                  for="last_name"
                  class="w-full sm:w-[48%] text-[16px] sm:text-[18px] text-[#3B3B98] font-bold"
                  >{{ $t("contact.lastname") }}
                  <input
                    id="last_name"
                    type="last_name"
                    placeholder="Doe"
                    class="w-full p-5 rounded-lg text-black mt-1 text-[14px] sm:text-[16px] outline-none border border-[#3B3B98]"
                  />
                </label>
              </div>
              <div
                class="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-5 sm:mb-10"
              >
                <label
                  for="email"
                  class="w-full sm:w-[48%] text-[16px] sm:text-[18px] text-[#3B3B98] mb-5 sm:mb-0 font-bold"
                  >{{ $t("contact.email") }}
                  <input
                    id="email"
                    type="email"
                    placeholder="johndoe@gmail.com"
                    class="w-full p-5 rounded-lg text-black mt-1 text-[14px] sm:text-[16px] outline-none border border-[#3B3B98]"
                  />
                </label>
                <label
                  for="username"
                  class="w-full sm:w-[48%] text-[16px] sm:text-[18px] text-[#3B3B98] font-bold"
                  >{{ $t("contact.tgusername") }}
                  <input
                    id="username"
                    type="username"
                    placeholder="@johndoe"
                    class="w-full p-5 rounded-lg text-black mt-1 text-[14px] sm:text-[16px] outline-none border border-[#3B3B98]"
                  />
                </label>
              </div>
              <label
                for="msg"
                class="w-full sm:w-[48%] text-[16px] sm:text-[18px] text-[#3B3B98] font-bold"
                >{{ $t("contact.message") }}
                <textarea
                  name="message"
                  id="msg"
                  cols="30"
                  rows="10"
                  :placeholder="$t('contact.typemsg')"
                  class="w-full p-5 rounded-lg text-black mt-1 text-[14px] sm:text-[16px] outline-none border border-[#3B3B98]"
                ></textarea>
              </label>
              <h2 class="mt-10 text-end">
                <button
                  class="border border-[#3B3B98] rounded-lg text-white text-[16px] sm:text-[18px] bg-[#3B3B98] py-3 px-10"
                >
                  {{ $t("contact.send") }}
                </button>
              </h2>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import AOS from "aos";

AOS.init();
</script>

<style lang="scss" scoped>
.contact-wrapper {
  position: relative;
  min-height: 100vh;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url("/static/img/bg4.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(2px);
    z-index: -1;
  }
}

// .contact-section {
//   position: relative;
//   min-height: 100vh;
//   background-color: rgba(71, 243, 255, 0.2);
// }

.phone,
.email {
  transition: 1s;
}
</style>
