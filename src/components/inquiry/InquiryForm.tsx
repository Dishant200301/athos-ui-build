import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const InquiryForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    company: "",
    contactName: "",
    email: "",
    productName: "Fish Collagen Peptide",
    quantity: "",
    country: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inquiry Submitted",
      description: "Thank you for your inquiry. We will get back to you soon.",
    });
    setFormData({
      company: "",
      contactName: "",
      email: "",
      productName: "Fish Collagen Peptide",
      quantity: "",
      country: "",
      phone: "",
      message: ""
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container-custom max-w-4xl">
        <h1 className="text-3xl md:text-[40px] font-bold text-primary mb-10">
          Inquiry
        </h1>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Company Name - Full Width */}
          <div>
            <Label htmlFor="company" className="text-muted-foreground">
              Company name
            </Label>
            <Input
              id="company"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1"
            />
          </div>
          
          {/* Row 1: Contact Name + Email */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="contactName" className="text-muted-foreground">
                Contact Person Name<span className="text-destructive">*</span>
              </Label>
              <Input
                id="contactName"
                name="contactName"
                value={formData.contactName}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-muted-foreground">
                Email<span className="text-destructive">*</span>
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
          </div>
          
          {/* Row 2: Product Name + Quantity */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="productName" className="text-muted-foreground">
                Product Name<span className="text-destructive">*</span>
              </Label>
              <Select
                value={formData.productName}
                onValueChange={(value) => setFormData(prev => ({ ...prev, productName: value }))}
              >
                <SelectTrigger className="mt-1">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fish Collagen Peptide">Fish Collagen Peptide</SelectItem>
                  <SelectItem value="Fish Gelatin">Fish Gelatin</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor="quantity" className="text-muted-foreground">
                Quantity<span className="text-destructive">*</span>
              </Label>
              <Input
                id="quantity"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                placeholder="Ex: 100 ton/kg/lb"
                required
                className="mt-1"
              />
            </div>
          </div>
          
          {/* Row 3: Country + Phone */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="country" className="text-muted-foreground">
                Country<span className="text-destructive">*</span>
              </Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="phone" className="text-muted-foreground">
                Phone<span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                required
                className="mt-1"
              />
            </div>
          </div>
          
          {/* Message */}
          <div>
            <Label htmlFor="message" className="text-muted-foreground">
              Message<span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 min-h-[108px]"
            />
          </div>
          
          <Button 
            type="submit" 
            className="bg-[#198754] hover:bg-[#198754]/90 text-white rounded-tl-md rounded-br-md rounded-tr-none rounded-bl-none"
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default InquiryForm;
