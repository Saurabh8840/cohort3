import React from "react";

export default function RootLayout({children}: {children: React.ReactNode;})
 {
    return (<div>
        <div className="p-4 border-b">
            
      Medium
          </div>
          {children}
          

    </div>
      
          
     
    );
  }
  