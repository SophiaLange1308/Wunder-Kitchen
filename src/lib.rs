use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Kitchen {
    width: f64,
    depth: f64,
    height: f64,
}

#[wasm_bindgen]
impl Kitchen {
    #[wasm_bindgen(constructor)]
    pub fn new(width: f64, depth: f64, height: f64) -> Kitchen {
        Kitchen { width, depth, height }
    }

    #[wasm_bindgen]
    pub fn calculate_modules(&self) -> String {
        let module_size = 60.0; // Standardgröße für Schränke
        let num_base_cabinets = (self.width / module_size).floor() as i32;
        let num_wall_cabinets = (self.width / module_size).floor() as i32;

        format!(
            "Empfohlene Module:\n- {} Unterschränke\n- {} Hängeschränke\n- Arbeitsplatte: {} cm",
            num_base_cabinets, num_wall_cabinets, self.width
        )
    }
}
