const skills = ["React", "NodeJS", "Tailwind", "Git", "MongoDB"]

export default function Skills() {
  return (
    <section
  id="skills"
  className="py-20 bg-black text-white text-center"
>

      <h2 className="text-3xl font-bold">Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-10 max-w-3xl mx-auto">
        {skills.map(skill => (
          <div className="border p-4 rounded-lg hover:bg-gray-800 transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  )
}
