import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "flowbite-react";
import { Footers } from "@/components/Footer";
import { Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = React.useState({
    namaLengkap: "",
    nomorhp: "",
    email: "",
    pesan: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Data berhasil dikirim!");
  };

  return (
    <>
      <div className="flex flex-col gap-8 py-12 md:py-16 bg-gray-50">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 max-w-6xl mx-auto rounded-xl overflow-hidden shadow-2xl">
          <div className="bg-primary text-white p-8 md:p-12 relative">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-8">
                <h2 className="text-3xl font-bold">
                  <span className="border-b-2 border-white pb-1">01</span>
                  <span className="text-lg font-normal ml-2">/ KONTAK KAMI</span>
                </h2>
              </div>

              <div className="space-y-4 mt-8">
                <p className="text-sm opacity-85 mb-8 max-w-md">
                  Butuh informasi lebih lanjut? Jangan ragu untuk menghubungi kami melalui kontak di bawah ini. Tim kami siap membantu Anda dengan pertanyaan, permintaan, atau kebutuhan khusus yang mungkin Anda miliki.
                </p>

                <div className="flex items-center gap-4">
                  <div className="bg-opacity-20 p-2 rounded-full">
                    <Phone className="h-5 w-5" />
                  </div>
                  <p>+62 812 3456789</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-opacity-20 p-2 rounded-full">
                    <Mail className="h-5 w-5" />
                  </div>
                  <p>info@perusahaan.co.id</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-opacity-20 p-2 rounded-full">
                    <Twitter className="h-5 w-5" />
                  </div>
                  <p>x.com</p>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-opacity-20 p-2 rounded-full">
                    <Facebook className="h-5 w-5" />
                  </div>
                  <p>facebook.com</p>
                </div>
              </div>
            </div>

            {/* Design elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-500 rounded-full -mr-16 -mt-16 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500 rounded-full -ml-12 -mb-12 opacity-30"></div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white p-8 md:p-12">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-3xl font-bold text-gray-800">
                <span className="border-b-2 border-green-600 pb-1">02</span>
                <span className="text-lg font-normal ml-2">/ KIRIM PESAN ANDA DISINI</span>
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
              <div>
                <Input
                  type="text"
                  id="namaLengkap"
                  name="namaLengkap"
                  value={formData.namaLengkap}
                  onChange={handleInputChange}
                  required
                  placeholder="Nama Lengkap Anda"
                  className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-50"
                />
              </div>

              <div>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="Email anda"
                  className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-50"
                />
              </div>

              <div>
                <Input
                  type="text"
                  id="nomorhp"
                  name="nomorhp"
                  value={formData.nomorhp}
                  onChange={handleInputChange}
                  required
                  placeholder="Nomor Telephone"
                  className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500 bg-gray-50"
                />
              </div>

              <div>
                <Textarea
                  id="pesan"
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleInputChange}
                  required
                  placeholder="Tulis pesan Anda di sini..."
                  className="w-full px-3 py-4 border border-gray-300 rounded-md focus:outline-none focus:ring-1  bg-gray-50"
                  rows={5}
                />
              </div>

              <Button
                type="submit"
                className="w-full py-4 px-6 bg-primary text-white font-semibold rounded-md"
              >
                Kirim Pesan
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footers />
    </>
  );
}