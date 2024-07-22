import backgroundImage from "../../assets/Belle4.png"; // Adjust the path as necessary

const SucessRate = () => {
  return (
    <div className="relative text-white">
      <img
        src={backgroundImage}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative container px-5 py-24 mx-auto z-50 text-white text-center space-y-4">
        <h1 className="text-5xl">SuccessRate</h1>
        <p>He has achieved about 60% of success rates</p>
        <div className="h-[0.5px] w-full bg-white" />
        <p className="text-[23px]">
          He has featured in a number of development / non-profit activities in
          his immediate environment and beyond such as medical outreaches under
          the auspices of MDCAN, WACS, NCCMDS and church-related as well. He was
          involved in training CHEWS (community health extension workers in
          rural areas in the FCT under the SHOPS PLUS project) and a coordinator
          of the E-MOTIVE multicnetered trial at a tertiary health center in
          Abuja – a trial that seeks to elicit the effectiveness of the use of
          tranexemic acid in the prevention and treatment of postpartum
          haemorrhage.
          <br /> In his role as the medical director, he stands for women’s and
          couple’s choices, gynaecological health and education in the field of
          Assisted Reproduction and supports their choices and offers options
          along ethicsl standrards. He promotes safer, less-drug-orientated and
          accessible IVF especially in women over 40 or incurable conditions
          such as stage 4 Endometriosis. He has achieved about 60% success
          rates.
          <br />
          <br />
          He is actively involved in fertility management and has recorded
          successful IVF treatments for clients using own gamete, donor gametes,
          surrogacy, preimplantation genetic testing for sex selection and
          screening of genetic disorders. Dr John is principled, detailed and
          open to his clients and so has enjoyed positive reviews from both
          clients and colleagues.
        </p>
      </div>
    </div>
  );
};

export default SucessRate;
