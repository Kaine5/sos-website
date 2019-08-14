import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="flex-container">
        <div className="flex-container0">
          <div>1</div>
          <div>2</div>
        </div>

        <div className="flex-container1">
          <div>
            <p>subsribe to newsletter</p>
            <input type="text" placeholder="Your email" name="school" />
            <input type="submit" value="Go" />
          </div>
          <div>
            <input type="submit" value="Contact us" />
          </div>
        </div>
      </div>
    </div>
  );
}
