import Image from "next/image";

const TeamMemberCard = ({
  imageUrl,
  name,
  jobTitle,
  description
}) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-8 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border border-white/20">
      {/* Profile Image */}
      <div className="mb-6">
        <div className="w-48 h-48 mx-auto relative overflow-hidden">
          <Image
            src={imageUrl}
            alt={`${name} profile`}
            fill
            className="rounded-lg object-cover hover:scale-110 transition-transform duration-500"
          />
        </div>
      </div>

      {/* Name */}
      <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-2 text-center">
        {name}
      </h3>

      {/* Job Title */}
      <p className="text-blue-600 font-semibold mb-6 text-center uppercase text-sm tracking-wide">
        {jobTitle}
      </p>

      {/* Description */}
      <div className="text-gray-600 text-sm leading-relaxed space-y-3 text-left">
        {description.map((paragraph, index) => (
          <p key={index}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default TeamMemberCard;