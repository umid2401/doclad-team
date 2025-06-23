import { motion, AnimatePresence } from "framer-motion";

const CurrencyGroup = ({ currencies, slideId }) => {
  return (
    <div key={`currencies-${slideId}`}>
      {currencies.map((item, i) => (
        <AnimatePresence mode="wait" key={`currency-wrap-${slideId}-${i}`}>
          <motion.img
            key={`currency-${slideId}-${i}-${item.className}`}
            src={item.src}
            className={item.className}
            initial={{ x: 200, rotate: 60, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            exit={{ x: -200, rotate: -60, opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          />
        </AnimatePresence>
      ))}
    </div>
  );
};

export default CurrencyGroup;
