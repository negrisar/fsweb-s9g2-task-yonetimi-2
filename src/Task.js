import React from "react";
import { differenceInDays,formatDistanceToNow } from "date-fns";
import {tr} from "date-fns/locale";

const Task = ({ taskObj, onComplete }) => {

  const distance = formatDistanceToNow(
    new Date(taskObj.deadline),{
      addSuffix: true,
      locale: tr
    }
  );

  const deadlineClose = differenceInDays(
    new Date(taskObj.deadline),
    new Date()
  ) <=3;

  return (
    <div className="bg-[#fff] shadow-md p-6 rounded leading-normal mt-4">
      <h3 className="text-lg text-[#c8781a]">{taskObj.title}</h3>
      <div className="text-s pt-1">son teslim: <span className={deadlineClose ? "bg-[#ffd9d4]" : "bg-[#d4d7ff]"}>{distance}</span></div>
      <p className="text-s pt-2 py-0 pb-3 text-[#444]">{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="inline-block py-1 px-3 text-sm mr-1 mb-2 rounded border border-solid border-gray200" key={p}>{p}</span>
        ))}
      </div>
      {onComplete && <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>}
    </div>
  );
};

export default Task;
