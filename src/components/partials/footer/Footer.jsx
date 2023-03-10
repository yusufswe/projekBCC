import React from "react";

const Footer = () => {
  return (
    <div className=" mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-600 bg-YankeesBlue w-full h-[355px]">
      <div>
        <h1 className="w-full text-3xl font-bold text-White">FindIn</h1>
        <p className="py-4 text-White">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa ab,
          eum, ipsam voluptatem rem excepturi quia explicabo doloribus ducimus
          atque libero veniam animi pariatur reprehenderit temporibus
          aspernatur? Error, laborum doloribus!
        </p>

      </div>
      <div className="flex justify-between mt-6 mr-10">
        <div>
          <h6 className="font-medium text-White">Lorem</h6>
          <ul>
            <li className="py-2 text-sm text-White">Lorem</li>
            <li className="py-2 text-sm text-White">Lorem</li>
            <li className="py-2 text-sm text-White">Lorem</li>
            <li className="py-2 text-sm text-White">Lorem</li>
            <li className="py-2 text-sm text-White">Lorem</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-White">Lorem</h6>
          <ul>
            <li className="py-2 text-sm text-White">Lorem</li>
            <li className="py-2 text-sm text-White">Lorem</li>
            <li className="py-2 text-sm text-White">Lorem</li>
            <li className="py-2 text-sm text-White">Lorem</li>
            <li className="py-2 text-sm text-White">Lorem</li>
          </ul>
        </div>        
      </div>
    </div>
  );
};

export default Footer;
