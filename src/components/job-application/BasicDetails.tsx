import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Pencil, Check } from "lucide-react";

const BasicDetails = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [details, setDetails] = useState({
        companyName: "",
        jobTitle: "",
        jobLink: "",
        followUpDate: "",
        resumeName: ""
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDetails({ ...details, [e.target.name]: e.target.value });
    };
  
    return (
        <div className="space-y-4">
            <div className="flex justify-between items-center">
                <h2 className="text-lg font-semibold">Basic Details</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsEditing(!isEditing)}>
                    {isEditing ? <Check className="h-4 w-4" /> : <Pencil className="h-4 w-4" />}
                </Button>
            </div>
            <div className="grid grid-cols-2 gap-4">
                {Object.entries(details).map(([key, value]) => (
                    <div key={key} className="space-y-2">
                        <Label htmlFor={key}>{key.replace(/([A-Z])/g, " $1").replace(/^./, str => str.toUpperCase())}</Label>
                        <Input
                            id={key}
                            name={key}
                            value={value}
                            onChange={handleChange}
                            readOnly={!isEditing}
                            className={isEditing ? "" : "bg-muted"}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BasicDetails;