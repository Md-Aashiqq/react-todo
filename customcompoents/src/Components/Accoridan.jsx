/* eslint-disable react/prop-types */
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const AccoridanItem = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <>
      <div onClick={() => setIsClicked(!isClicked)} className="item">
        <div className="title">{item.title}</div>

        <AnimatePresence>
          {isClicked && (
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2 }}
              className="content"
            >
              <p>{item.content}</p>{" "}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

const Accoridan = ({ content }) => {
  return (
    <div className="container">
      {content.map((item, index) => (
        <AccoridanItem item={item} key={index} />
      ))}
    </div>
  );
};

export default Accoridan;
