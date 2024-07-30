"use client";

import Image from "next/image";
import Link from "next/link";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { BiPhone, BiRightArrowAlt } from "react-icons/bi";
import { textAnim, transition } from "@/theme/animation";
import { pages } from "@/theme/navigation";
import { FaHandsHelping, FaServer, FaUserCircle } from "react-icons/fa";
import { LuArrowUpRight } from "react-icons/lu";
import Marker from "@/components/marker";
import Footer from "@/components/footer";
import { services } from "@/theme/services";
import { about } from "@/theme/about";
import { CgMail } from "react-icons/cg";
import Counter from "@/components/counter";
import { BsStars } from "react-icons/bs";
import { features } from "@/theme/features";
import WhatsappBtn from "@/components/whatsapp";

export default function Home() {
  return (
    <main className="flex flex-col text-white">
      <div className="w-full bg-zinc-800">
        <div className="content flex items-center justify-between py-3">
          <div className="flex-center gap-6">
            <p className="text-sm">
              <CgMail size={16} className="inline-block mr-1" />
              E-mail:{" "}
              <Link
                target="_blank"
                href="mailto:contato@seti.com.br"
                className="text-primary hover:underline"
              >
                contato@seti.com.br
              </Link>
            </p>
            <p className="text-sm">
              <BiPhone size={16} className="inline-block mr-0.5" />
              Telefone:{" "}
              <Link
                target="_blank"
                href="tel:+554733700064"
                className="text-primary hover:underline"
              >
                (47) 3370-0064
              </Link>
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href={{
                query: { lang: "br" },
              }}
              className="rounded-full w-4 h-4 overflow-hidden relative"
            >
              <Image
                className="scale-110"
                src="/images/flags/br.png"
                alt="Português"
                layout="fill"
              />
            </Link>
            <Link
              href={{
                query: { lang: "en" },
              }}
              className="rounded-full w-4 h-4 overflow-hidden relative"
            >
              <Image src="/images/flags/usa.png" alt="English" layout="fill" />
            </Link>
          </div>
        </div>
      </div>

      <div className="w-full sticky z-[9999] top-0 bg-gray-950/90 backdrop-blur-lg">
        <div className="py-3 content flex justify-between">
          <Link href="/" className="flex gap-2 items-center">
            <Image
              src="/images/seti/logo.svg"
              alt="Logo Seti"
              width={60}
              height={60}
            />
            <div className="font-bold">
              <h1 className="">SETI SISTEMAS</h1>
              <p className="text-center text-[8px] uppercase">
                Soluções em Tecnologia
              </p>
            </div>
          </Link>

          <div className="small:hidden flex items-center font-medium">
            {pages.map((page, index) => (
              <Link
                key={index}
                href={page.href}
                className="hover:text-primary px-6 py-3 transition-all border-b-2 border-transparent hover:border-primary gap-1 flex-center"
              >
                {page.label}
                <LuArrowUpRight size={16} />
              </Link>
            ))}
            <button className="ml-6 border-primary border-2 px-6 py-2 font-semibold text-sm rounded-full text-primary flex-center transition-all hover:x-[text-white,bg-primary]">
              Entre em contato <BiRightArrowAlt size={24} className="ml-2" />
            </button>
          </div>

          <button className="big:hidden">
            <IoMenu size={24} className="text-primary" />
          </button>
        </div>
      </div>

      <section className="h-[70vh] w-full relative">
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 10000,
          }}
          speed={1000}
          className="absolute-full hero"
          style={{ zIndex: 10, position: "absolute" }}
        >
          {["team", "metting", "office", "office-worker"].map(
            (image, index) => (
              <SwiperSlide key={index}>
                <div className="absolute-full bg-black/70 " />
                <div className="absolute-full bg-primary/40 mix-blend-overlay" />
                <video
                  src={`/images/banners/${image}.mp4`}
                  className="-z-10 unselectable undraggable absolute-full object-cover object-center"
                  autoPlay
                  muted
                  loop
                />
                <Link
                  href={"#solutions"}
                  className="flex-center flex-col text-center w-full h-full small:max-w-main-6 mx-auto relative z-10"
                >
                  <div className="overflow-hidden">
                    <motion.p
                      initial={{
                        opacity: 0,
                      }}
                      whileInView={{
                        opacity: 1,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        duration: 2,
                        delay: 1.85,
                      }}
                      className="text-primary uppercase"
                    >
                      Descubra soluções
                    </motion.p>
                  </div>
                  <motion.h2
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                      once: true,
                    }}
                    className="font-ibm-plex-serif text-6xl font-semibold mb-16  overflow-children"
                  >
                    <div>
                      <motion.div
                        variants={textAnim}
                        transition={{
                          ...transition,
                          delay: 0.5,
                        }}
                      >
                        Juntos podemos construir
                      </motion.div>
                    </div>
                    <div>
                      <motion.div
                        variants={textAnim}
                        transition={{
                          ...transition,
                          delay: 0.7,
                        }}
                      >
                        {" "}
                        o <span className="text-primary">resultado</span> que a
                        sua
                      </motion.div>
                    </div>
                    <div>
                      <motion.div
                        variants={textAnim}
                        transition={{
                          ...transition,
                          delay: 0.9,
                        }}
                      >
                        equipe <span className="text-primary">merece</span>
                      </motion.div>
                    </div>
                  </motion.h2>
                  <motion.p
                    initial={{
                      opacity: 0,
                    }}
                    whileInView={{
                      opacity: 1,
                    }}
                    transition={{
                      duration: 2,
                      delay: 1.85,
                    }}
                    viewport={{
                      once: true,
                    }}
                    className="mb-8 text-lg max-w-main-6"
                  >
                    Temos a missão de ajudar a sua empresa a crescer, com
                    soluções que facilitam o dia a dia e aumentam a
                    produtividade.
                  </motion.p>
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    className="overflow-hidden"
                    viewport={{
                      once: true,
                    }}
                  >
                    <motion.button
                      variants={{
                        hidden: {
                          y: "100%",
                        },
                        visible: {
                          y: 0,
                          transition: {
                            delay: 2.25,
                            duration: 1,
                            type: "spring",
                          },
                        },
                      }}
                      viewport={{
                        once: true,
                      }}
                      className="bg-primary border-primary border-2 px-6 py-2 font-semibold text-lg rounded-full transition-colors text-white hover:x-[text-primary,bg-transparent] flex-center group"
                    >
                      Saiba mais <BiRightArrowAlt size={24} className="ml-2" />
                    </motion.button>
                  </motion.div>
                </Link>
              </SwiperSlide>
            )
          )}
        </Swiper>
      </section>

      <section className="w-full bg-gray-950/90">
        <div className="content flex small:flex-col gap-10 small:pb-12">
          <div className="py-24 small:pb-12 leading-7 flex-1">
            <div className="mb-6">
              <p className="text-primary mb-1 font-light text-sm">
                Conheça-nos
              </p>
              <h2 className="font-ibm-plex-serif text-5xl font-semibold">
                Sobre nós
              </h2>
            </div>
            <div>
              <p className="mb-6">
                Oferecer soluções com <Marker>softwares de gestão</Marker>,
                destacando-se pelas equipes comprometidas com os resultados dos
                clientes.
              </p>{" "}
              <h3 className="font-bold text-lg text-primary mb-2">Visão:</h3>
              <p>
                Ser referência em softwares de geração de{" "}
                <Marker delay={0.2}>resultados</Marker>.
              </p>
              <h3 className="font-bold text-lg text-primary mb-2 mt-4">
                Valores:
              </h3>
              <ul className="list-square ml-8">
                <li>Foco no Cliente</li>
                <li>Transparência</li>
                <li>Dedicação</li>
                <li>Comprometimento</li>
                <li>Amizade</li>
                <li>União</li>
              </ul>
              <button className="bg-primary mt-6 border-primary border-2 px-6 py-2 font-semibold text-lg rounded-full transition-all text-white hover:x-[text-primary,bg-transparent] flex-center group">
                Conheça mais sobre{" "}
                <BiRightArrowAlt size={24} className="ml-2" />
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-wrap">
            {about.map(({ icon, title, bg }, index) => (
              <div
                key={index}
                className={
                  "w-1/2 min-h-60 transition-all border border-transparent hover:border-primary relative overflow-hidden flex-center flex-col text-center group " +
                  (bg ? "bg-white/5" : "")
                }
              >
                <div className="absolute top-0 left-0 opacity-0 group-hover:opacity-70 transition-all transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                  <Image
                    src="/images/illustrations/circle.svg"
                    alt="Figura circulo gratiente"
                    width={500}
                    height={500}
                    className="unselectable undraggable scale-150"
                  />
                </div>

                <Image
                  src={`/images/icons/${icon}`}
                  alt={`Icon ${title}`}
                  width={70}
                  height={70}
                />
                <h3 className="text-gray-500 mt-8 text-lg">{title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full py-36 relative overflow-hidden flex flex-col gap-32">
        <div className="content bg-neutral-100 flex items-start gap-10 small:flex-col-reverse">
          <div className="flex-1">
            <p className="text-primary text-[15px] small:text-xs mb-2 font-semibold">
              Nossos Diferenciais
            </p>
            <h2 className="text-5xl font-bold font-ibm-plex-serif text-neutral-950 small:text-3xl mb-7 leading-[1.2]">
              Por que escolher a{" "}
              <Marker className="pr-2 text-white">S4 Cibersegurança</Marker>
            </h2>
            <Image
              src="/images/illustrations/bottom-heading.svg"
              alt="Merlin Logo"
              width={103}
              height={12}
              className="mb-8"
            />
            <p className="text-base leading-7 text-neutral-800 [&>*]:x-[bg-primary,text-white,py-0.5,px-1]">
              Firewall de Próxima Geração, IDS/IPS, VPN, QoS, Balanceamento e
              Redundância de Links, Controle de Navegação e Skype, Anti-Spam,
              E-mail, Colaboração, Hotspot, <b>Monitoramento em tempo real</b>,
              Dashboards, Relatórios, Cluster para alta disponibilidade e muito
              mais. Tudo isso, com a finalidade de trazer <b>segurança</b> e{" "}
              <b>controle da Internet</b> em seu negócio.
            </p>
            <motion.div
              initial={{
                opacity: 0,
                x: "-7%",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                ...transition,
                delay: 1.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <button className="bg-primary relative z-10 mt-12 border-primary border-2 px-6 py-2 font-semibold text-lg rounded-full transition-all text-white hover:x-[text-primary,bg-gray-100] flex-center group">
                Saiba mais <BiRightArrowAlt size={24} className="ml-2" />
                <div className="absolute-full flex-center group-hover:animate-ping z-0">
                  <div className="transform w-full h-full rounded-full scale-x-[65%] scale-y-[75%] border border-transparent group-hover:border-primary/70" />
                </div>
              </button>
            </motion.div>
          </div>

          <div className="relative">
            <Image
              src="/images/illustrations/arrow.svg"
              alt="Seta"
              width={103}
              height={12}
              className="absolute -top-2 -left-12 rotate-[34deg] z-10"
            />

            <motion.div
              initial={{
                x: "7%",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                ...transition,
                duration: 1,
                delay: 1,
              }}
              viewport={{
                once: true,
              }}
              className="overflow-hidden rounded-xl border-[3px] border-primary"
            >
              <Image
                src="/images/sections/s4.webp"
                alt="S4 Cibersegurança"
                width={500}
                height={400}
                className="hover:scale-[1.05] w-main-6 h-main-4 small:h-main-3 object-cover transition-all duration-500"
              />
            </motion.div>
          </div>
        </div>

        <div className="content bg-neutral-100 flex items-start gap-20 small:flex-col">
          <div className="relative">
            <Image
              src="/images/illustrations/pointer.svg"
              alt="Indicador"
              width={50}
              height={12}
              className="absolute -bottom-12 -right-5  z-10"
            />
            <motion.div
              initial={{
                x: "-7%",
                opacity: 0,
              }}
              whileInView={{
                x: 0,
                opacity: 1,
              }}
              transition={{
                ...transition,
                duration: 1,
                delay: 1,
              }}
              viewport={{
                once: true,
              }}
              className="overflow-hidden rounded-xl border-[3px] border-fuchsia-600"
            >
              <Image
                src="/images/sections/sm.webp"
                alt="SM Monitoramento de TI"
                width={500}
                height={400}
                className="hover:scale-[1.05] w-main-6 h-main-4 small:h-main-3 object-cover transition-all duration-500"
              />
            </motion.div>
          </div>
          <div className="flex-1">
            <p className="text-fuchsia-600 text-[15px] small:text-xs mb-2 font-semibold">
              Nossos Diferenciais
            </p>
            <h2 className="text-5xl font-bold font-ibm-plex-serif text-neutral-950 small:text-3xl mb-7 leading-[1.2]">
              Quais são os benefícios{" "}
              <Marker bg="bg-fuchsia-600" className="pr-2 text-white">
                SM Monitoramento de TI
              </Marker>
            </h2>
            <Image
              src="/images/illustrations/bottom-heading-pink.svg"
              alt="Merlin Logo"
              width={103}
              height={12}
              className="mb-8"
            />
            <p className="text-base leading-7 text-neutral-800 [&>*]:x-[bg-fuchsia-600,text-white,py-0.5,px-1]">
              Monitoramento de hardware e software 24/7, notificações via
              APP/e-mail/SMS, TV corporativa, Helpdesk com portal de{" "}
              <b>atendimento customizável</b> e integração por e-mail,
              Inventário de hardware e software, Dashboards, relatórios e APP
              exclusivo para Android e IOS. Sem dúvida, uma{" "}
              <b>Gestão da TI completa</b>!
            </p>
            <motion.div
              initial={{
                opacity: 0,
                x: "-7%",
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                ...transition,
                delay: 1.5,
              }}
              viewport={{
                once: true,
              }}
            >
              <button className="bg-fuchsia-600 relative mt-12 border-fuchsia-600 border-2 px-6 py-2 font-semibold text-lg rounded-full transition-all text-white hover:x-[text-fuchsia-600,bg-gray-100] flex-center group">
                Saiba mais <BiRightArrowAlt size={24} className="ml-2" />
                <div className="absolute-full flex-center animate-ping -z-10">
                  <div className="transform w-full h-full rounded-full scale-x-[65%] scale-y-[75%] border group-hover:border-fuchsia-600/70" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
        <motion.div
          initial={{
            clipPath: "circle(0% at 50% 50%)",
          }}
          whileInView={{
            clipPath: "circle(100% at 50% 50%)",
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="absolute w-[500px] h-[500px] bottom-4 left-0 origin-left -z-10"
        >
          <Image
            src="/images/illustrations/circle-icons-l.png"
            alt="Círculos com ícones"
            width={500}
            height={500}
            className="w-full h-full transform object-left object-scale-down pointer-events-none unselectable undraggable"
          />
        </motion.div>
        <motion.div
          initial={{
            clipPath: "circle(0% at 50% 50%)",
          }}
          whileInView={{
            clipPath: "circle(100% at 50% 50%)",
          }}
          transition={{
            duration: 1,
            delay: 0.5,
          }}
          viewport={{
            once: true,
          }}
          className="absolute w-[500px] h-[500px] top-4 right-0 origin-right -z-10"
        >
          <Image
            src="/images/illustrations/circle-icons-r.png"
            alt="Círculos com ícones"
            width={500}
            height={500}
            className="w-full h-full transform object-right object-scale-down pointer-events-none unselectable undraggable"
          />
        </motion.div>
        <div className="content"></div>
      </section>

      <section className="w-full bg-gray-950/90 py-12 small:py-2.5">
        <div className="content flex small:flex-col">
          <Counter icon={BsStars} number={20} title="Anos de Experiência" />
          <Counter
            icon={FaUserCircle}
            number={1500}
            more
            bg
            title="Clientes Por Todo o Brasil"
          />
          <Counter
            icon={FaHandsHelping}
            number={100}
            more
            title="Colaboradores Diretos e Indiretos"
          />
          <Counter
            icon={FaServer}
            number={3000}
            more
            bg
            title="Servidores Instalados"
          />
        </div>
      </section>

      <section className="w-full text-black pt-48">
        <div className="content">
          <div className="mb-16">
            <p className="text-neutral-800 mb-1 font-light text-sm">
              Nossos Serviços
            </p>
            <h2 className="font-ibm-plex-serif text-5xl font-semibold">
              Como Podemos te <Marker className="text-white">Ajudar</Marker>
            </h2>
          </div>
        </div>
        <div className="w-full pl-[calc((100vw-1352px)/2)] relative overflow-x-hidden">
          <Swiper
            modules={[Pagination]}
            slidesPerView={3}
            breakpoints={{
              1: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            speed={1000}
            className="pr-[10vw] h-[600px] services-swiper"
            style={{
              overflow: "visible",
            }}
          >
            {services.map((service, index) => (
              <SwiperSlide className="pb-8" key={index}>
                <div className="w-full h-full rounded-xl border-2 border-gray-300 hover:x-[border-primary,bg-white,shadow-md] transition-all duration-150 px-10 py-10">
                  <div className="h-full flex flex-col justify-between">
                    <div>
                      <div className="mb-6">
                        <Image
                          src={`/images/icons/${service.icon}`}
                          alt={`Service ${service.title}`}
                          width={70}
                          height={70}
                        />
                      </div>
                      <h3 className="font-bold text-2xl mb-4">
                        {service.title}
                      </h3>
                      <p className="text-lg">{service.description}</p>
                      <ul className="list-disc mt-4 ml-8">
                        {service.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <Link
                      href={service.link}
                      className="bg-primary mt-6 border-primary border-2 px-6 py-2 font-semibold text-lg rounded-full transition-all text-white hover:x-[text-primary,bg-transparent] flex-center group"
                    >
                      Saiba mais <BiRightArrowAlt size={24} className="ml-2" />
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="w-full text-black py-52">
        <div className="content">
          <div className="mb-16 text-center">
            <p className="text-neutral-800 mb-1 font-light text-sm">
              Nossos ferramentas
            </p>
            <h2 className="font-ibm-plex-serif text-5xl font-semibold">
              Quais são as{" "}
              <Marker className="text-white">nossas soluções</Marker>
            </h2>
          </div>
        </div>
        <div className="w-full pl-[calc((100vw-1352px)/2)] relative overflow-x-hidden small:overflow-y-hidden">
          <Swiper
            modules={[Autoplay, FreeMode]}
            slidesPerView={4}
            autoplay={{
              delay: 3000,
            }}
            freeMode
            breakpoints={{
              1: {
                direction: "vertical",
                slidesPerView: 3,
              },
              480: {
                direction: "vertical",
                slidesPerView: 4,
              },
              768: {
                direction: "horizontal",
                slidesPerView: 3,
              },
              1024: {
                direction: "horizontal",
                slidesPerView: 4,
              },
            }}
            spaceBetween={10}
            loop
            speed={1000}
            className="pr-[10vw] xsmall:max-h-[800px] services-swiper"
            style={{
              overflow: "visible",
            }}
          >
            {features.map((feat, index) => (
              <SwiperSlide
                className="pb-8 max-h-[400px] small:pb-16"
                key={index}
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    ...transition,
                    delay: 0.2,
                  }}
                  viewport={{
                    once: true,
                  }}
                >
                  <div className="w-full min-h-[300px] small:min-h-[200px] flex gap-2 rounded-xl border-2 border-gray-300 hover:x-[border-primary,bg-white,shadow-md] transition-all duration-150 px-10 py-10">
                    <div>
                      <feat.icon
                        size={30}
                        className={
                          index % 2 == 0 ? "text-cyan-500" : "text-fuchsia-600"
                        }
                      />
                    </div>
                    <div className="h-full flex flex-col justify-between">
                      <div>
                        <h3 className="font-bold text-xl mb-4">{feat.title}</h3>
                        <p
                          className={
                            "text-sm leading-7 text-neutral-700 " +
                            (index % 2 == 0
                              ? "[&>*]:x-[bg-cyan-500,text-white,py-0.5,px-1]"
                              : "[&>*]:x-[bg-fuchsia-600,text-white,py-0.5,px-1]")
                          }
                          dangerouslySetInnerHTML={{ __html: feat.description }}
                        />
                        {/* <ul className="list-disc mt-4 ml-8">
                        {feat.list.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul> */}
                      </div>
                      {/* <Link
                      href={feat.link}
                      className="bg-primary mt-6 border-primary border-2 px-6 py-2 font-semibold text-lg rounded-full transition-all text-white hover:x-[text-primary,bg-transparent] flex-center group"
                    >
                      Saiba mais <BiRightArrowAlt size={24} className="ml-2" />
                    </Link> */}
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      <section className="w-full text-black bg-white pb-60 pt-40">
        <div className="content">
          <div className="flex-center text-center">
            <div className="mb-16">
              <p className="text-neutral-800 mb-1 font-light text-sm">
                Nossos Clientes
              </p>
              <h2 className="font-ibm-plex-serif text-5xl font-semibold">
                Quem Confia no Nosso Trabalho
              </h2>
            </div>
          </div>
        </div>

        <div className="w-full relative">
          <div className="h-full bg-gradient-to-r from-white to-transparent w-[20vw] absolute top-0 left-0 z-50" />
          <div className="h-full bg-gradient-to-l from-white to-transparent w-[20vw] absolute top-0 right-0 z-50" />

          <div className="small:w-[200%] w-full transform small:-translate-x-1/2 relative overflow-x-hidden">
            <Swiper
              modules={[Autoplay, FreeMode]}
              slidesPerView={6}
              spaceBetween={30}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
              }}
              freeMode
              loop
              height={80}
              speed={3000}
              className="h-[80px] small:h-[50px] clients-swiper mb-[30px] pointer-events-none"
              style={{
                overflow: "visible",
              }}
            >
              {[
                "acme-corp",
                "alpha-wave",
                "alt-shift",
                "biosynthesia",
                "bolt-shift",
                "building-blocks",
                "calescence",
                "capsule",
                "catalxg",
                "chromatools",
              ].map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full p-1 small:p-4 flex-center rounded-xl border border-gray-300 hover:x-[border-primary,bg-white,shadow-md] transition-all duration-150">
                    <Image
                      src={`/images/companies/${image}.svg`}
                      alt={`Client ${image}`}
                      width={150}
                      height={150}
                      className="unselectable undraggable object-scale-down"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <Swiper
              modules={[Autoplay, FreeMode]}
              slidesPerView={6}
              spaceBetween={30}
              allowTouchMove={false}
              autoplay={{
                delay: 0,
                reverseDirection: true,
              }}
              freeMode
              loop
              height={80}
              speed={3000}
              className="h-[80px] small:h-[50px] clients-swiper pointer-events-none"
              style={{
                overflow: "visible",
              }}
            >
              {[
                "alpha-wave",
                "acme-corp",
                "biosynthesia",
                "alt-shift",
                "bolt-shift",
                "calescence",
                "building-blocks",
                "catalxg",
                "capsule",
                "chromatools",
              ].map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full p-1 small:p-4 flex-center rounded-xl border border-gray-300 hover:x-[border-primary,bg-white,shadow-md] transition-all duration-150">
                    <Image
                      src={`/images/companies/${image}.svg`}
                      alt={`Client ${image}`}
                      width={150}
                      height={150}
                      className="unselectable undraggable object-scale-down"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />

      <WhatsappBtn />
    </main>
  );
}
