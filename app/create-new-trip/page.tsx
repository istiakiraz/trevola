"use client"
import ChatBox from "./_components/ChatBox";
import { useSearchParams } from "next/navigation";

function CreateNewTrip() {

  const searchParams = useSearchParams();
  const query = searchParams.get("query") || "";

  return (
    <section className="2xl:w-9/12 w-11/12 mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* chat box */}
        <div>
          <ChatBox query={query}/>
        </div>

        {/* map and trip display */}

        <div>
          <h2>3d map display</h2>
        </div>
      </div>
    </section>
  );
}

export default CreateNewTrip;
