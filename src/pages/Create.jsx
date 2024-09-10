import { useState } from "react";
import { level, prompt } from "@/utility/constant";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
const Create = () => {
  const [formData, setFormData] = useState({
    tech: "",
    level: "",
    days: "",
  });
  const [loading, setLoading] = useState(false);
  const handleSubmit = async () => {
    const data = JSON.parse(localStorage.getItem("user"));
    if (!data?.isAuthenticated) {
      toast.error("Please login to continue.");
    }
    if (formData.tech == "" || formData.level == "" || formData.days == "") {
      toast.error("All fields are required.");
      return;
    }
    const finalPrompt = prompt
      .replace("{react}", formData.tech)
      .replace("{25}", formData.days)
      .replace("{25}", formData.days)
      .replace("{biginer}", formData.level);
  };
  return (
    <div className="sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10">
      <h1 className="font-bold text-3xl text-white">
        Tell us your tech interest
      </h1>
      <p className="mt-3 text-gray-400 text-xl">
        just provide some basic information, and our Path.ai will generate a
        customized roadmap on your preferance.
      </p>
      <div>
        <h2 className="font-medium my-3 text-white text-xl">
          Which tech you want to learn?
        </h2>
        <input
          className="bg-gray-800 rounded w-full p-2 text-white"
          name={"tech"}
          value={formData.tech}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          placeholder={"eg: React"}
        />
      </div>
      <div>
        <h2 className="font-medium text-white my-3 text-xl">
          How many days are you planing your Trip?
        </h2>
        <input
          className="bg-gray-800 rounded w-full p-2 text-white"
          name={"days"}
          value={formData.days}
          onChange={(e) =>
            setFormData({ ...formData, [e.target.name]: e.target.value })
          }
          placeholder={"eg: 5"}
          type={"number"}
        />
      </div>
      <div>
        <h2 className="font-medium my-3 text-xl">What is Your budget?</h2>
        <div className="grid grid-cols-3 gap-5 mt-5">
          {level.map((option, index) => (
            <div
              onClick={() => setFormData({ ...formData, level: option.title })}
              className={`p-4 border rounded-lg hover:shadow-lg  hover:shadow-gray-700 ${
                formData.level == option.title &&
                "shadow-lg shadow-gray-700 border-black"
              } cursor-pointer`}
              key={index}
            >
              <h2 className="text-4xl">{option.icon}</h2>
              <h2 className="font-bold text-white text-lg">{option.title}</h2>
              <h2 className="text-gray-500 text-sm">{option.desc}</h2>
            </div>
          ))}
        </div>
      </div>
      <div className="my-10 flex justify-end">
        <Button
          onClick={() => handleSubmit()}
          type={"submit"}
          disabled={loading}
          className={"bg-red-600"}
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="w-7 h-7 bg-red-600 animate-spin" />
          ) : (
            "Generate Trip"
          )}
        </Button>
      </div>

      <Toaster />
    </div>
  );
};

export default Create;
