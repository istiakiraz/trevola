import React from "react";
import ChatBox from "./_components/ChatBox";

function CreateNewTrip() {
  return (
    <section className="2xl:w-9/12 w-11/12 mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {/* chat box */}
        <div>
                <ChatBox/>
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
