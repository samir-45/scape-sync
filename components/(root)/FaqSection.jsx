// components/FAQ.tsx
export default function FAQ() {
  return (
    <section className="px-6 sm:px-12 lg:px-16 py-16">
      {/* Heading */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 mt-2">
          Quick answers to help you get the most out of our app.
        </p>
      </div>

      {/* Accordion */}
      <div className="max-w-3xl mx-auto space-y-4">
        {/* Item 1 */}
        <div className="collapse  border-[1.5px] border-[#C7E6C5] bg-white rounded-lg">
          <input type="radio" name="faq" defaultChecked />
          <div className="collapse-title text-lg font-semibold text-gray-800">
            Is the app free to use?
          </div>
          <div className="collapse-content text-gray-600 text-sm leading-relaxed">
            Yes! We offer a free plan for individuals and small teams. Paid plans
            unlock more features for scaling businesses.
          </div>
        </div>

        {/* Item 2 */}
        <div className="collapse border-[1.5px] border-[#C7E6C5] bg-white rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title text-lg font-semibold text-gray-800">
            Can I assign multiple employees to one job?
          </div>
          <div className="collapse-content text-gray-600 text-sm leading-relaxed">
            Absolutely! You can assign multiple employees to the same job and
            track their progress in real time.
          </div>
        </div>

        {/* Item 3 */}
        <div className="collapse border-[1.5px] border-[#C7E6C5] bg-white rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title text-lg font-semibold text-gray-800">
            Does it work on both mobile and desktop?
          </div>
          <div className="collapse-content text-gray-600 text-sm leading-relaxed">
            Yes, our app is fully responsive and works seamlessly on both mobile
            and desktop devices.
          </div>
        </div>

        {/* Item 4 */}
        <div className="collapse border-[1.5px] border-[#C7E6C5] bg-white rounded-lg">
          <input type="radio" name="faq" />
          <div className="collapse-title text-lg font-semibold text-gray-800">
            Is my data secure?
          </div>
          <div className="collapse-content text-gray-600 text-sm leading-relaxed">
            We use industry-standard encryption and security practices to ensure
            your data stays safe and private.
          </div>
        </div>
      </div>
    </section>
  );
}
