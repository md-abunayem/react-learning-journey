import React from "react";

import { useNavigate } from "react-router-dom";
import PageTitle from "../components/PageTitle";

const Contact = () => {
  const navigate = useNavigate();
  console.log(navigate);

  return (
    <div>
      <PageTitle title="Contact"></PageTitle>
      <h1>Contact</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
        fuga! Esse, dolore sed. Sint molestiae eos laboriosam repellendus error
        mollitia nulla enim adipisci. Quidem cupiditate ipsum fugit sint odio
        minima. Nihil saepe sint doloribus earum deserunt aspernatur unde ut
        voluptatem velit iusto quia magnam accusantium ipsum, architecto fugit,
        veritatis illo asperiores nobis hic alias officiis provident? Molestiae
        sit aperiam harum. Quibusdam tempora suscipit minima repellendus quaerat
        itaque, dolorum nihil ipsa officia ea nostrum possimus vel sit ipsum.
        Eos nostrum recusandae vero, harum deleniti maiores, quaerat voluptas
        fuga, debitis nemo commodi?
      </p>

      <button onClick={() => navigate("/")}>Go to Home</button>
    </div>
  );
};

export default Contact;
