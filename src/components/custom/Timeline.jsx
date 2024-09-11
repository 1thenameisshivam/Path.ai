/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "../ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import ReactPlayer from "react-player/lazy";
const Timeline = ({ details }) => {
  return (
    <section className="text-white">
      <div className="container max-w-5xl px-4 py-12 mx-auto">
        <div className="grid gap-4 mx-4 sm:grid-cols-12 ">
          <div className="col-span-12 sm:col-span-3">
            <div className="text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 before:bg-violet-600">
              <h3 className="text-3xl font-semibold">
                <span className="text-red-600">Path</span>.ai
              </h3>
              <span className="text-sm font-bold tracking-wider uppercase text-white">
                Curated Roadmap
              </span>
            </div>
          </div>
          <div className="relative col-span-12 px-[11px] space-y-6 sm:col-span-9 border-l-2 border-gray-500">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-white-300">
              {details?.map((data, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-violet-600"
                >
                  <h3 className="text-xl font-semibold tracking-wide">
                    {data.topic}
                  </h3>
                  <time className="text-xs tracking-wide uppercaset text-white">
                    Days {data.days}
                  </time>
                  <p className="mt-3">
                    <Accordion type="single" collapsible>
                      <AccordionItem value="item-1" className="border-none">
                        <AccordionTrigger>
                          You can check some referances releted your topic.
                        </AccordionTrigger>
                        <AccordionContent className="flex gap-2">
                          {data.resources.map((resource, index) =>
                            resource.type.toLowerCase().includes("video") ? (
                              <div key={index}>
                                <Popover className="bg-transparent">
                                  <PopoverTrigger>
                                    <Button
                                      variant="destructive"
                                      className="bg-red-600"
                                    >
                                      {resource.type}
                                    </Button>
                                  </PopoverTrigger>
                                  <PopoverContent className="bg-transparent w-full">
                                    <ReactPlayer url={resource.link} />
                                  </PopoverContent>
                                </Popover>
                              </div>
                            ) : (
                              <div key={index}>
                                <Button
                                  onClick={() =>
                                    window.open(resource.link, "_blank")
                                  }
                                  variant="destructive"
                                  className="bg-red-600"
                                >
                                  {resource.type}
                                </Button>
                              </div>
                            )
                          )}
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
