export default function NewCustomer() {
  return (
    <section className="new-customer-create">
      <h2>Create new Customer</h2>
      <label htmlFor="full-name">Customer Full Name</label>
      <input type="text" id="full-name" />
      <label htmlFor="NID">National ID</label>
      <input type="text" id="NID" />
      <button>create new customer</button>
    </section>
  );
}
