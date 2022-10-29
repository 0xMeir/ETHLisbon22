predicate;

// cargo test -- --nocapture if you want the log() statements to log to console for .sw files
// dbg!() for .rs files

use std::{b512::B512, constants::ZERO_B256, ecr::ec_recover_address, inputs::input_predicate_data, prelude::*, logging::log};
/*
fn get_predicate_input_index() -> u8 {
    asm() {
        gm index i3;
        index: u8
    } 
    // if this returns the wrong data, try grabbing the lower part of the hex
}

fn get_output_index(input_index:u8) -> u64 {
    asm(input_index) {
        gtf output_index input_index i259;
        output_index: u64
    }
}

fn get_tx_id_memory_address(input_index:u8) -> u64 {
    asm(input_index) {
        gtf output_index input_index i258;
        output_index: u64
    }
}

fn get_tx_id_at_address(address: u64) -> b256 {
    let mut i = 0;
    while i < 4 {
        let id: 
        let output = asm(address) -> u64 {
        lw output address i0;
        output
    }

}
*/
fn extract_pulic_key_and_match(signature: B512, expected_public_key: b256) -> u64 {
    /*let predicate_input_index = get_predicate_input_index();
    log("1 predicate_input_index:");
    log(predicate_input_index);
    let output_index = get_output_index(predicate_input_index);
    log("2 output_index:");
    log(output_index);
    let tx_id_memory_address = get_tx_id_memory_address(predicate_input_index);
    log("3 tx_id_memory_address");
    log(tx_id_memory_address);
    let tx_id_at_address = get_tx_id_at_address(tx_id_memory_address);
    log("4 tx_id_at_address");
    log(tx_id_at_address);*/
    if let Result::Ok(pub_key_sig) = ec_recover_address(signature, ZERO_B256)
    {
        if pub_key_sig.value == expected_public_key {
            return 1;
        }
    }
    0       
}

fn main() -> bool {
    let signatures: [B512; 3] = input_predicate_data(0);

    let public_keys = [
        0xd58573593432a30a800f97ad32f877425c223a9e427ab557aab5d5bb89156db0,
        0x14df7c7e4e662db31fe2763b1734a3d680e7b743516319a49baaa22b2032a857,
        0x3ff494fb136978c3125844625dad6baf6e87cdb1328c8a51f35bda5afe72425c,
    ];

    let mut matched_keys = 0;

    matched_keys = extract_pulic_key_and_match(signatures[0], public_keys[0]);
    matched_keys = matched_keys + extract_pulic_key_and_match(signatures[1], public_keys[1]);
    matched_keys = matched_keys + extract_pulic_key_and_match(signatures[2], public_keys[2]);

    matched_keys > 1
}