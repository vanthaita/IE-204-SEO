import React from 'react'
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi luôn sẵn sàng hỗ trợ và lắng nghe ý kiến của bạn
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Thông Tin Liên Hệ</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:ie204seo@gmail.com" className="text-lg hover:text-primary transition-colors">
                    ie204seo@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <svg className="h-6 w-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                  <a 
                    href="https://github.com/TDevUIT/Bloai" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-lg hover:text-primary transition-colors"
                  >
                    GitHub Repository
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-semibold mb-6">Gửi Tin Nhắn</h2>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input id="name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Tiêu đề</Label>
                  <Input id="subject" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Nội dung</Label>
                  <Textarea id="message" rows={4} required />
                </div>
                <Button type="submit" className="w-full">
                  Gửi Đi
                </Button>
              </form>
            </Card>
          </div>

          <Card className="p-6 h-full">
            <h2 className="text-2xl font-semibold mb-6">Địa Chỉ</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Trường Đại học Công nghệ Thông tin - ĐHQG TP.HCM<br />
                Khu phố 6, Phường Linh Trung, Thành phố Thủ Đức, TP.HCM
              </p>
              <div className="aspect-video">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.231357709644!2d106.80027651533625!3d10.870008392270836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIEPGsG5nIDQtVFAuSENNIChVSVQp!5e0!3m2!1svi!2s!4v1717585435951!5m2!1svi!2s" 
                  className="w-full h-full rounded-lg border"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </Card>
        </div>

      </div>
    </div>
  )
}

export default ContactPage