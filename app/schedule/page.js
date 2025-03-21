
export default function page() {
 
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let date = today.getDate();
  
    if (month < 10) {
      month = "0" + month;
    }
    if (date < 10) {
      date = "0" + date;
  }
  
     

  return (
    <div>
      <h1>All Line Schedule</h1>
      <h3>
        Today : {date}-{month}-{year}
      </h3>
      
    </div>
  );
}
