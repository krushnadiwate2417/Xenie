import data from "@/utils/data.json";

const sections = data.frameEight.footerContent;

// interface Section {
//   heading: string;
//   items: string[];
// }

// const sections: Section[] = [
//   {
//     heading: "XenieBooks Software",
//     items: [
//       "Billing Software",
//       "Inventory Management Software",
//       "GST Calculator",
//       "Bill Book App",
//       "Barcode Scanner",
//       "GST Consultation Services"
//     ]
//   },
//   {
//     heading: "Feature",
//     items: [
//       "GST Reports",
//       "Customer Supplier Visibility",
//       "Sales Order Invoice",
//       "Purchase Order",
//       "Cash & Bank Reconciliation",
//       "Multi Company & Users",
//       "Tally Export",
//       "E- Way Bill",
//       "Barcode Scanner",
//       "WhatsApp Auto Send",
//       "Thermal Printer",
//       "Generate and share e-invoices",
//       "Delivery Challan"
//     ]
//   },
//   {
//     heading: "Resources",
//     items: [
//       "About Us",
//       "Tutorial",
//       "FAQ's",
//       "Media",
//       "Policy",
//       "Blogs",
//       "Data Security",
//       "Job and Culture"
//     ]
//   },
//   {
//     heading: "Business Category we Serve",
//     items: [
//       "Ad Agency Billing Software",
//       "Billing Software for Construction Company",
//       "Billing Software For Consultants",
//       "Billing Software For Contractors",
//       "Jewellery Billing Software",
//       "Billing Software For Farm",
//       "Billing Software For Lawyer",
//       "Billing Software For Freelancers",
//       "Billing Software For Photo Studio",
//       "Billing Software For Growing Business",
//       "Billing Software For Small Business",
//       "Billing Software For Salon",
//       "Billing Software For Real Estate",
//       "Billing Software For Personal",
//       "Billing Software For Online Billing Software"
//     ]
//   }
// ];



export default function FooterGrid(){
    return <>
        <div className="grid grid-cols-4 gap-x-5 justify-center ml-32 mr-24 mb-16 text-white">
            {sections.map(obj=>(
                <div key={obj.heading} className="flex flex-col gap-7">
                    <div className="text-xl font-semibold">{obj.heading}</div>
                    <div className="flex flex-col gap-3 text-xs">{obj.items.map(vals=><div key={vals}>{vals}</div>)}</div>
                </div>
            ))}
        </div>
    </>
}