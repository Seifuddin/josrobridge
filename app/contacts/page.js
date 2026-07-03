"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // success / error

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("success");
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="overflow-hidden rounded -3xl bg-white shado-xl border border-gray-200">
          <div className="grid lg:grid-cols-2">
            {/* LEFT SIDE */}
            <div className="relative bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white p-6 md:p-8 flex flex-col justify-between">
              <div>
                <span className="inline-block px-4 py-1 text-orange-400 rounded-full bg-white/10 border border-white/20 text-sm">
                  Contact Josro Bridge
                </span>

                <h2 className="mt-4 text-3xl md:text-4xl font-bold leading-tight">
                  Begin Your Global Academic Journey
                  <br />
                </h2>

                <p className="mt-4 text-white/80 leading-relaxed max-w-lg">
                  Whether you're seeking university admission, IELTS training,
                  scholarship opportunities, or international career pathways,
                  our experts are ready to guide you every step of the way.
                </p>
              </div>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 text-orange-400 rounded -xl bg-white/10 flex items-center justify-center">
                    <Phone size={20} />
                  </div>

                  <div>
                    <p className="text-white/60 text-sm">Phone</p>
                    <p className="font-medium">+254 720 823 950</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 text-orange-400 rounded -xl bg-white/10 flex items-center justify-center">
                    <Mail size={20} />
                  </div>

                  <div>
                    <p className="text-white/60 text-sm">Email</p>
                    <p className="font-medium">info@josrobridge.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 text-orange-400 rounded -xl bg-white/10 flex items-center justify-center">
                    <MapPin size={20} />
                  </div>

                  <div>
                    <p className="text-white/60 text-sm">Office</p>
                    <p className="font-medium">Nairobi, Kenya</p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="p-6 md:p-8">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold text-gray-900">
                  Send Us a Message
                </h3>

                <p className="mt-2 text-gray-600">
                  Complete the form below and our consultants will contact you
                  shortly.
                </p>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Full Name"
                      className="w-full border border-gray-300 rounded -xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-600"
                      required
                    />

                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="Email Address"
                      className="w-full border border-gray-300 rounded -xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-600"
                      required
                    />
                  </div>

                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full border border-gray-300 rounded -xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />

                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded -xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-orange-600"
                  >
                    <option value="">Select Service</option>
                    <option>University Placement</option>
                    <option>IELTS Training</option>
                    <option>Business Consultancy</option>
                    <option>Professional Training</option>
                    <option>Labor Mobility</option>
                  </select>

                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Tell us about your goals..."
                    className="w-full border border-gray-300 rounded -xl px-4 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-orange-600"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="group inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-1.5 rounded -xl font-medium hover:bg-blue-800 transition disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send Inquiry"}
                    <ArrowRight
                      size={18}
                      className="group-hover:translate-x-1 transition"
                    />
                  </button>

                  {/* STATUS MESSAGE */}
                  {status === "success" && (
                    <p className="text-green-600 text-sm mt-2">
                      Message sent successfully!
                    </p>
                  )}

                  {status === "error" && (
                    <p className="text-red-600 text-sm mt-2">
                      Something went wrong. Please try again.
                    </p>
                  )}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}