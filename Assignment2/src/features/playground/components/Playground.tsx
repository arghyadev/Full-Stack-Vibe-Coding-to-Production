import { Avatar } from "../../../components/Avatar";
import { Badge } from "../../../components/Badge";
import { Card } from "../../../components/Card";
import { UserProfile } from "../../profile/components/UserProfile";

export function Playground() {
    return (
        <div className="p-8 flex gap-8">
            <UserProfile
                name="Arghya Saha"
                imageUrl="https://randomuser.me/api/portraits/men/1.jpg"
                role="Developer"
                isAdmin={true}
            />

            <UserProfile
                name="AI Assistant"
                imageUrl="https://ui-avatars.com/api/?name=AI&background=random"
                role="Junior Developer"
            />

            <Card title="User Profile">
                <div className="flex items-center gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-100 max-w-sm">
                    <Avatar imageUrl="https://randomuser.me/api/portraits/men/1.jpg" altText="Arghya's avatar" size="lg" />
                    <div>
                        <h2 className="text-xl font-extrabold text-gray-900">{name}</h2>
                        <div className="mt-2">
                            <Badge role="Developer" isAdmin={false} />
                        </div>
                    </div>
                </div>
            </Card>

            <Card title="System Status">
                <p className="text-gray-600">All systems operational.</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
                    Run Diagnostics
                </button>
            </Card>
        </div>
    );
}