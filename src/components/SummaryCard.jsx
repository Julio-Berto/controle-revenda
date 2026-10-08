function SummaryCard({ titulo, valor }) {
    return (
        <div className="bg-white shadow-md rounded-lg p-4">
            <h2 className="text-lg font-semibold">{titulo}</h2>
            <p className="text-2xl font-bold">{valor}</p>
        </div>
    )
}

export default SummaryCard