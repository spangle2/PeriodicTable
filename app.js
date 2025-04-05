// Interactive Periodic Table JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Element data
    const elements = [
        { number: 1, symbol: "H", name: "Hydrogen", weight: 1.008, category: "nonmetal", state: "gas", electron: "1s¹", discovered: "1766", description: "Hydrogen is the lightest element and the most abundant chemical substance in the universe. It's primarily used in the chemical industry and for petroleum refining." },
        { number: 2, symbol: "He", name: "Helium", weight: 4.0026, category: "noble-gas", state: "gas", electron: "1s²", discovered: "1868", description: "Helium is a colorless, odorless, tasteless, non-toxic, inert, monatomic gas. It's used in cryogenics, pressurizing and purging systems, and as a protective gas for many industrial applications." },
        { number: 3, symbol: "Li", name: "Lithium", weight: 6.94, category: "alkali-metal", state: "solid", electron: "[He] 2s¹", discovered: "1817", description: "Lithium is a soft, silvery-white alkali metal. It has the lowest density of all metals and is primarily used in batteries, ceramics, and pharmaceuticals." },
        { number: 4, symbol: "Be", name: "Beryllium", weight: 9.0122, category: "alkaline-earth", state: "solid", electron: "[He] 2s²", discovered: "1798", description: "Beryllium is a relatively rare element in the universe. It's used in aerospace materials, X-ray equipment, and nuclear applications." },
        { number: 5, symbol: "B", name: "Boron", weight: 10.81, category: "metalloid", state: "solid", electron: "[He] 2s² 2p¹", discovered: "1808", description: "Boron is a semiconductor rather than a metallic element. It's used in borosilicate glass, detergents, and as a dopant in semiconductors." },
        { number: 6, symbol: "C", name: "Carbon", weight: 12.011, category: "nonmetal", state: "solid", electron: "[He] 2s² 2p²", discovered: "Prehistoric", description: "Carbon is the 15th most abundant element in the Earth's crust and the fourth most abundant element in the universe by mass. It is present in all known life forms." },
        { number: 7, symbol: "N", name: "Nitrogen", weight: 14.007, category: "nonmetal", state: "gas", electron: "[He] 2s² 2p³", discovered: "1772", description: "Nitrogen forms about 78% of Earth's atmosphere. It's used in the production of ammonia, nitric acid, and fertilizers." },
        { number: 8, symbol: "O", name: "Oxygen", weight: 15.999, category: "nonmetal", state: "gas", electron: "[He] 2s² 2p⁴", discovered: "1774", description: "Oxygen is a highly reactive nonmetal that forms compounds with almost all other elements. It's essential for human respiration and constitutes about 21% of the atmosphere." },
        { number: 9, symbol: "F", name: "Fluorine", weight: 18.998, category: "halogen", state: "gas", electron: "[He] 2s² 2p⁵", discovered: "1886", description: "Fluorine is the most electronegative element and a highly toxic pale yellow gas. It's used in the production of uranium and more than 100 commercial fluorochemicals." },
        { number: 10, symbol: "Ne", name: "Neon", weight: 20.180, category: "noble-gas", state: "gas", electron: "[He] 2s² 2p⁶", discovered: "1898", description: "Neon is a colorless, odorless, inert monatomic gas. It's widely used in signs and produces a distinctive reddish-orange glow when used in low-voltage neon glow lamps." },
        
        // Row 3
        { number: 11, symbol: "Na", name: "Sodium", weight: 22.990, category: "alkali-metal", state: "solid", electron: "[Ne] 3s¹", discovered: "1807", description: "Sodium is a soft, silvery-white, highly reactive metal. It's an essential element for life and is abundantly present in the Earth's oceans as sodium chloride (salt)." },
        { number: 12, symbol: "Mg", name: "Magnesium", weight: 24.305, category: "alkaline-earth", state: "solid", electron: "[Ne] 3s²", discovered: "1755", description: "Magnesium is the ninth most abundant element in the universe. It's essential for plant and animal life and is commonly used in lightweight alloys." },
        { number: 13, symbol: "Al", name: "Aluminum", weight: 26.982, category: "post-transition", state: "solid", electron: "[Ne] 3s² 3p¹", discovered: "1825", description: "Aluminum is a silvery-white, soft, non-magnetic metal. It's the most abundant metal in the Earth's crust and is widely used in transportation, packaging, and construction." },
        { number: 14, symbol: "Si", name: "Silicon", weight: 28.085, category: "metalloid", state: "solid", electron: "[Ne] 3s² 3p²", discovered: "1824", description: "Silicon is the second most abundant element in the Earth's crust. It's primarily used in steel refining, aluminum casting, and semiconductor manufacturing." },
        { number: 15, symbol: "P", name: "Phosphorus", weight: 30.974, category: "nonmetal", state: "solid", electron: "[Ne] 3s² 3p³", discovered: "1669", description: "Phosphorus is essential for life and is a component of DNA, RNA, ATP, and phospholipids. It's used in fertilizers, detergents, and food additives." },
        { number: 16, symbol: "S", name: "Sulfur", weight: 32.06, category: "nonmetal", state: "solid", electron: "[Ne] 3s² 3p⁴", discovered: "Ancient", description: "Sulfur is an essential element for life and is found in two amino acids. It's used in the vulcanization of rubber, in gunpowder, and as a fungicide." },
        { number: 17, symbol: "Cl", name: "Chlorine", weight: 35.45, category: "halogen", state: "gas", electron: "[Ne] 3s² 3p⁵", discovered: "1774", description: "Chlorine is a yellow-green gas that is highly reactive. It's used in producing safe drinking water, in the production of paper, and in antiseptic products." },
        { number: 18, symbol: "Ar", name: "Argon", weight: 39.948, category: "noble-gas", state: "gas", electron: "[Ne] 3s² 3p⁶", discovered: "1894", description: "Argon is the third most abundant gas in the Earth's atmosphere. It's used in fluorescent lights, in welding, and as a preservative for historical documents." },
        
        // Row 4 - Add first 20 elements, more can be added later
        { number: 19, symbol: "K", name: "Potassium", weight: 39.098, category: "alkali-metal", state: "solid", electron: "[Ar] 4s¹", discovered: "1807", description: "Potassium is a silvery-white metal that is highly reactive with water. It's an essential nutrient for plant and animal life and is used in fertilizers." },
        { number: 20, symbol: "Ca", name: "Calcium", weight: 40.078, category: "alkaline-earth", state: "solid", electron: "[Ar] 4s²", discovered: "1808", description: "Calcium is essential for living organisms, particularly for bone formation. It's the fifth most abundant element in the Earth's crust and is used in construction and manufacturing." },
        { number: 21, symbol: "Sc", name: "Scandium", weight: 44.956, category: "transition-metal", state: "solid", electron: "[Ar] 4s² 3d¹", discovered: "1879", description: "Scandium is a silvery-white metallic element that develops a yellowish cast when exposed to air. It's used in aerospace components and sports equipment." },
        { number: 22, symbol: "Ti", name: "Titanium", weight: 47.867, category: "transition-metal", state: "solid", electron: "[Ar] 4s² 3d²", discovered: "1791", description: "Titanium is known for its high strength-to-weight ratio. It's used in aerospace applications, medical implants, and consumer products due to its corrosion resistance." },
        { number: 23, symbol: "V", name: "Vanadium", weight: 50.942, category: "transition-metal", state: "solid", electron: "[Ar] 4s² 3d³", discovered: "1801", description: "Vanadium is a metal used primarily as an alloying agent for iron and steel. It improves steel's strength, toughness, and heat resistance." },
        { number: 24, symbol: "Cr", name: "Chromium", weight: 51.996, category: "transition-metal", state: "solid", electron: "[Ar] 3d⁵ 4s¹", discovered: "1797", description: "Chromium is a steely-grey, lustrous, hard metal that can be highly polished. It's used in stainless steel production and in chrome plating." },
        { number: 25, symbol: "Mn", name: "Manganese", weight: 54.938, category: "transition-metal", state: "solid", electron: "[Ar] 4s² 3d⁵", discovered: "1774", description: "Manganese is a metal with important industrial alloy uses, particularly in stainless steels. It's an essential trace element for all known living organisms." },
        { number: 26, symbol: "Fe", name: "Iron", weight: 55.845, category: "transition-metal", state: "solid", electron: "[Ar] 4s² 3d⁶", discovered: "Ancient", description: "Iron is the most common element on Earth by mass. It's used in steel and its alloys, which are widely used in construction and manufacturing." },
        { number: 27, symbol: "Co", name: "Cobalt", weight: 58.933, category: "transition-metal", state: "solid", electron: "[Ar] 4s² 3d⁷", discovered: "1735", description: "Cobalt is a metal used in the preparation of magnetic, wear-resistant, and high-strength alloys. It's also used in batteries and as a pigment." },
        { number: 28, symbol: "Ni", name: "Nickel", weight: 58.693, category: "transition-metal", state: "solid", electron: "[Ar] 4s² 3d⁸", discovered: "1751", description: "Nickel is a silvery-white lustrous metal with a slight golden tinge. It's used in stainless steel, magnets, coins, rechargeable batteries, and as a catalyst." },
        { number: 29, symbol: "Cu", name: "Copper", weight: 63.546, category: "transition-metal", state: "solid", electron: "[Ar] 4s¹ 3d¹⁰", discovered: "Ancient", description: "Copper is a ductile metal with very high thermal and electrical conductivity. It's used in building construction, electrical wires, and electronics." },
        { number: 30, symbol: "Zn", name: "Zinc", weight: 65.38, category: "transition-metal", state: "solid", electron: "[Ar] 4s² 3d¹⁰", discovered: "1746", description: "Zinc is a bluish-white, lustrous metal. It's used in galvanizing iron, in batteries, and as an alloying agent in brass, nickel silver, and other alloys." },
        { number: 31, symbol: "Ga", name: "Gallium", weight: 69.723, category: "post-transition", state: "solid", electron: "[Ar] 4s² 3d¹⁰ 4p¹", discovered: "1875", description: "Gallium is a soft, silvery metal that can melt in your hand. It's used in semiconductors, LEDs, and as a substitute for mercury in thermometers." },
        { number: 32, symbol: "Ge", name: "Germanium", weight: 72.630, category: "metalloid", state: "solid", electron: "[Ar] 4s² 3d¹⁰ 4p²", discovered: "1886", description: "Germanium is a lustrous, hard, grayish-white metalloid. It's primarily used in fiber-optic systems, infrared optics, and semiconductor electronics." },
        { number: 33, symbol: "As", name: "Arsenic", weight: 74.922, category: "metalloid", state: "solid", electron: "[Ar] 4s² 3d¹⁰ 4p³", discovered: "Ancient", description: "Arsenic is a metalloid that can exist in various allotropes. While toxic, it's used in semiconductors, preservatives, pesticides, and some bronzes." },
        { number: 34, symbol: "Se", name: "Selenium", weight: 78.971, category: "nonmetal", state: "solid", electron: "[Ar] 4s² 3d¹⁰ 4p⁴", discovered: "1817", description: "Selenium is a nonmetal with properties similar to sulfur. It's used in electronics, glass production, and as a nutritional supplement." },
        { number: 35, symbol: "Br", name: "Bromine", weight: 79.904, category: "halogen", state: "liquid", electron: "[Ar] 4s² 3d¹⁰ 4p⁵", discovered: "1826", description: "Bromine is a reddish-brown liquid at room temperature. It's used in flame retardants, water purification, and in the production of medicines." },
        { number: 36, symbol: "Kr", name: "Krypton", weight: 83.798, category: "noble-gas", state: "gas", electron: "[Ar] 4s² 3d¹⁰ 4p⁶", discovered: "1898", description: "Krypton is a colorless, odorless, tasteless noble gas. It's used in certain photographic flashes, high-powered gas lasers, and some fluorescent lights." }
        
        // Additional elements can be added as needed
    ];

    // Element positions in the periodic table grid
    const positions = {
        1: { row: 1, col: 1 }, 2: { row: 1, col: 18 },
        3: { row: 2, col: 1 }, 4: { row: 2, col: 2 }, 5: { row: 2, col: 13 }, 6: { row: 2, col: 14 }, 7: { row: 2, col: 15 }, 8: { row: 2, col: 16 }, 9: { row: 2, col: 17 }, 10: { row: 2, col: 18 },
        11: { row: 3, col: 1 }, 12: { row: 3, col: 2 }, 13: { row: 3, col: 13 }, 14: { row: 3, col: 14 }, 15: { row: 3, col: 15 }, 16: { row: 3, col: 16 }, 17: { row: 3, col: 17 }, 18: { row: 3, col: 18 },
        19: { row: 4, col: 1 }, 20: { row: 4, col: 2 }, 21: { row: 4, col: 3 }, 22: { row: 4, col: 4 }, 23: { row: 4, col: 5 }, 24: { row: 4, col: 6 }, 25: { row: 4, col: 7 },
        26: { row: 4, col: 8 }, 27: { row: 4, col: 9 }, 28: { row: 4, col: 10 }, 29: { row: 4, col: 11 }, 30: { row: 4, col: 12 }, 31: { row: 4, col: 13 }, 32: { row: 4, col: 14 },
        33: { row: 4, col: 15 }, 34: { row: 4, col: 16 }, 35: { row: 4, col: 17 }, 36: { row: 4, col: 18 }
        // Additional positions can be added as needed
    };

    const table = document.getElementById('periodic-table');
    const propertySelect = document.getElementById('property-select');
    const elementDetails = document.getElementById('element-details');
    const closeDetails = document.getElementById('close-details');

    // Create elements in the periodic table
    elements.forEach(element => {
        const position = positions[element.number];
        if (!position) return;

        const elementDiv = document.createElement('div');
        elementDiv.className = `element ${element.category}`;
        elementDiv.style.gridRow = position.row;
        elementDiv.style.gridColumn = position.col;
        elementDiv.setAttribute('data-number', element.number);
        elementDiv.setAttribute('data-category', element.category);
        elementDiv.setAttribute('data-state', element.state);
        
        // Create element content
        elementDiv.innerHTML = `
            <div class="atomic-number">${element.number}</div>
            <div class="symbol">${element.symbol}</div>
            <div class="name">${element.name}</div>
            <div class="weight">${element.weight}</div>
        `;
        
        // Add click event to show element details
        elementDiv.addEventListener('click', () => showElementDetails(element));
        
        table.appendChild(elementDiv);
    });
    
    // Add lanthanide and actinide placeholders
    const lanthanideRow = document.createElement('div');
    lanthanideRow.className = 'lanthanide-row';
    lanthanideRow.style.gridRow = 6;
    lanthanideRow.style.gridColumn = '3 / span 15';
    lanthanideRow.textContent = '* Lanthanides (57-71)';
    table.appendChild(lanthanideRow);
    
    const actinideRow = document.createElement('div');
    actinideRow.className = 'actinide-row';
    actinideRow.style.gridRow = 7;
    actinideRow.style.gridColumn = '3 / span 15';
    actinideRow.textContent = '** Actinides (89-103)';
    table.appendChild(actinideRow);
    
    // Function to show element details
    function showElementDetails(element) {
        // Set up the details content
        document.getElementById('detail-symbol').textContent = element.symbol;
        document.getElementById('detail-symbol').className = `element-symbol ${element.category}`;
        document.getElementById('detail-name').textContent = element.name;
        document.getElementById('detail-number').textContent = element.number;
        document.getElementById('detail-weight').textContent = element.weight;
        document.getElementById('detail-electron').textContent = element.electron;
        document.getElementById('detail-state').textContent = element.state;
        document.getElementById('detail-category').textContent = formatCategory(element.category);
        document.getElementById('detail-discovered').textContent = element.discovered;
        document.getElementById('detail-description').textContent = element.description;
        
        // Show the details with animation
        elementDetails.classList.add('active');
        
        // Animation effect - elements fade and scale
        const elementItems = document.querySelectorAll('.element');
        elementItems.forEach(el => {
            el.style.transform = 'scale(0.95)';
            el.style.opacity = '0.5';
        });
    }
    
    // Function to close element details
    closeDetails.addEventListener('click', () => {
        elementDetails.classList.remove('active');
        
        // Restore elements
        const elementItems = document.querySelectorAll('.element');
        elementItems.forEach(el => {
            el.style.transform = '';
            el.style.opacity = '';
        });
    });
    
    // Format category for display
    function formatCategory(category) {
        return category.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
        ).join(' ');
    }
    
    // Property filters
    propertySelect.addEventListener('change', function() {
        const property = this.value;
        const elements = document.querySelectorAll('.element');
        
        // Reset all elements
        elements.forEach(el => {
            el.classList.remove('hidden');
            el.style.opacity = '1';
        });
        
        if (property === 'category') {
            // Default view - by category (already styled with CSS)
            elements.forEach(el => {
                el.style.backgroundColor = '';
            });
        } else if (property === 'state') {
            // Color by state
            elements.forEach(el => {
                const state = el.getAttribute('data-state');
                let color;
                
                switch (state) {
                    case 'solid':
                        color = '#4a4a4a';
                        break;
                    case 'liquid':
                        color = '#3498db';
                        break;
                    case 'gas':
                        color = '#2ecc71';
                        break;
                    default:
                        color = '#95a5a6';
                }
                
                el.style.backgroundColor = color;
            });
        } else if (property === 'atomic-weight') {
            // Color gradient by atomic weight
            const weights = Array.from(elements).map(el => {
                const number = parseInt(el.getAttribute('data-number'));
                const elementData = elements.find(e => e.number === number);
                return elementData ? elementData.weight : 0;
            });
            
            const minWeight = Math.min(...weights.filter(w => w > 0));
            const maxWeight = Math.max(...weights);
            
            elements.forEach(el => {
                const number = parseInt(el.getAttribute('data-number'));
                const elementData = elements.find(e => e.number === number);
                if (elementData) {
                    const weightRatio = (elementData.weight - minWeight) / (maxWeight - minWeight);
                    const hue = 240 - weightRatio * 240; // Blue to red
                    el.style.backgroundColor = `hsl(${hue}, 70%, 60%)`;
                }
            });
        }
    });

    // Add animation effects
    function animateElements() {
        const elements = document.querySelectorAll('.element');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
            }, index * 20);
        });
    }
    
    // Initial animation
    window.addEventListener('load', () => {
        const elements = document.querySelectorAll('.element');
        elements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'scale(0.8)';
        });
        
        setTimeout(animateElements, 300);
    });
    
    // Handle window resize for responsiveness
    window.addEventListener('resize', () => {
        adjustTableSize();
    });
    
    function adjustTableSize() {
        const containerWidth = document.querySelector('.periodic-table-container').offsetWidth;
        const tableWidth = document.querySelector('.periodic-table').offsetWidth;
        
        if (containerWidth < tableWidth) {
            document.querySelector('.periodic-table-container').style.overflowX = 'auto';
        } else {
            document.querySelector('.periodic-table-container').style.overflowX = 'hidden';
        }
    }
    
    // Initial table size adjustment
    setTimeout(adjustTableSize, 100);
});