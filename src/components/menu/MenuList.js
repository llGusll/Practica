import React, { useMemo } from "react";
import { getMenuByPublisher } from "./getMenuByPublisher";
import { MenuCard } from "./MenuCard";

export const MenuList = ({ publisher }) => {
  const menuData = useMemo(() => getMenuByPublisher(publisher), [publisher]);

  return (
    <div className="row">
      {menuData.map((menu) => (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 cards">
          <MenuCard key={menu.id} {...menu} />
        </div>
      ))}
    </div>
  );
};
